export type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    name: "hybrid-rag-engine",
    description:
      "A hybrid retrieval RAG platform: pgvector cosine search and full-text search, combined with Reciprocal Rank Fusion, cross-encoder reranking, and citation-grounded streaming generation.",
    tags: ["RAG", "pgvector", "FastAPI", "Azure OpenAI"],
    href: "https://github.com/suneet91/hybrid-rag-engine",
  },
  {
    name: "agentic-fact-verifier",
    description:
      "A LangGraph multi-agent system that fact-checks claims using a ReAct search agent, fuzzy entity matching, statistical trust scoring, and an MCP tool server.",
    tags: ["LangGraph", "MCP", "Agentic AI"],
    href: "https://github.com/suneet91/agentic-fact-verifier",
  },
  {
    name: "nl2sql-guardrails",
    description:
      "Natural-language-to-SQL, grounded with RAG and locked down with multi-layer SQL safety validation, caching, and per-datasource concurrency control.",
    tags: ["NL2SQL", "RAG", "Safety"],
    href: "https://github.com/suneet91/nl2sql-guardrails",
  },
  {
    name: "multimodal-doc-auditor",
    description:
      "Parallel, fault-tolerant document compliance auditing using GPT-4o Vision plus OCR cross-verification, with per-check timeouts and incremental result persistence.",
    tags: ["GPT-4o Vision", "OCR", "FastAPI"],
    href: "https://github.com/suneet91/multimodal-doc-auditor",
  },
  {
    name: "multi-agent-support-router",
    description:
      "A LangGraph controller/specialist chatbot that escalates incomplete answers to a different specialist and streams its reasoning live over SSE.",
    tags: ["LangGraph", "Multi-Agent", "SSE"],
    href: "https://github.com/suneet91/multi-agent-support-router",
  },
];
