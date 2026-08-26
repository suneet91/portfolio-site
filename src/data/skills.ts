export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "GenAI & LLM",
    items: [
      "Retrieval-Augmented Generation",
      "Azure OpenAI (GPT-4o)",
      "LangChain / LangGraph",
      "Model Context Protocol (MCP)",
      "Hybrid Search & Reranking",
      "Agentic AI",
    ],
  },
  {
    category: "Data & Cloud",
    items: [
      "Azure (Databricks, ADF, Synapse, ADLS)",
      "Apache Spark / Spark Scala",
      "Apache Kafka",
      "PostgreSQL / pgvector",
      "Hadoop Ecosystem (Hive, HBase, Sqoop)",
      "Master Data Management",
    ],
  },
  {
    category: "Engineering",
    items: [
      "Python & Scala",
      "Kubernetes / Docker",
      "CI/CD (Azure DevOps)",
      "Data Modelling & KPI Engineering",
    ],
  },
];
