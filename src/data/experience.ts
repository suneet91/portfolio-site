export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Data & AI Engineer",
    company: "Hewlett Packard Enterprise",
    period: "Aug 2021 - Present",
    location: "Singapore",
    highlights: [
      "Own the architecture of a production RAG platform on Azure OpenAI (GPT-4o), including hybrid retrieval, reranking, and generation design.",
      "Built agentic multi-agent systems (LangGraph, MCP), multimodal document intelligence, and natural-language-to-SQL platforms.",
      "Migrated a KPI pipeline from SQL to Spark Scala, raising accuracy from 75% to 99.95%.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Palo IT Singapore",
    period: "Nov 2019 - Aug 2021",
    location: "Singapore",
    highlights: [
      "Built an end-to-end Analytics-as-a-Service platform using Kafka, Spark, and HDFS with a microservices architecture.",
      "Partnered with an innovation lab to design demand-forecasting analytics pipelines.",
    ],
  },
  {
    role: "Software Engineer II",
    company: "Microsoft R&D",
    period: "Sep 2018 - Nov 2019",
    location: "Hyderabad, India",
    highlights: [
      "Designed the cloud migration architecture for a legacy data platform to Azure.",
      "Managed global commercial sales and marketing data pipelines.",
    ],
  },
  {
    role: "Big Data Consultant",
    company: "Deloitte USI",
    period: "Feb 2017 - Mar 2018",
    location: "Bengaluru, India",
    highlights: [
      "Architected a Hadoop-based data integration solution for a leading American health insurance company.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Ericsson Global India",
    period: "Dec 2012 - Feb 2017",
    location: "Bengaluru, India",
    highlights: [
      "Developed and optimised ETL pipelines on Hadoop (MapReduce, Pig, Sqoop, Hive) for telecom network analytics.",
    ],
  },
];
