#!/usr/bin/env python
from __future__ import annotations

import argparse
import sys
import random
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from src.api import DEFAULT_FAISS_DIR
from src.datasets import ensure_beir_fever
from src.dense import DenseConfig, DenseIndexer


def main() -> None:
    parser = argparse.ArgumentParser(description="Build and save FAISS index for FEVER.")
    parser.add_argument("--index-dir", type=Path, default=DEFAULT_FAISS_DIR, help="Output directory for FAISS index.")
    parser.add_argument("--model", type=str, default="all-MiniLM-L6-v2", help="Sentence-BERT model.")
    parser.add_argument("--batch-size", type=int, default=64, help="Encoding batch size.")
    parser.add_argument("--sample", type=int, default=None, help="Randomly sample N docs from corpus before indexing.")
    parser.add_argument("--seed", type=int, default=42, help="RNG seed for sampling.")
    parser.add_argument("--limit", type=int, default=None, help="Optional limit of docs to index (for quick tests).")
    args = parser.parse_args()

    corpus, _, _ = ensure_beir_fever()
    config = DenseConfig(model_name=args.model, batch_size=args.batch_size)
    indexer = DenseIndexer(index_dir=args.index_dir, config=config)

    total_docs = len(corpus)
    if args.sample:
        rng = random.Random(args.seed)
        k = min(args.sample, total_docs)
        selected_ids = set(rng.sample(list(corpus.keys()), k))
        print(f"Sampling {k} of {total_docs} docs (seed={args.seed})")
        def gen_docs():
            for did in selected_ids:
                obj = corpus[did]
                yield did, obj.get("title", ""), obj.get("text", "")
    else:
        def gen_docs():
            for did, obj in corpus.items():
                yield did, obj.get("title", ""), obj.get("text", "")

    print(f"Building FAISS at {args.index_dir} using model '{args.model}' ...")
    indexer.build_from_corpus(gen_docs(), limit=args.limit)
    indexer.save()
    print("Saved index.faiss, docids.txt, meta.json")


if __name__ == "__main__":
    main()
