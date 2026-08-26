export type EducationItem = {
  program: string;
  institution: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    program: "MIT IDSS Data Science & Machine Learning Program",
    institution: "MIT",
    period: "In Progress, 2026",
  },
  {
    program: "Executive PG Programme in Machine Learning & Artificial Intelligence",
    institution: "IIIT Bangalore",
    period: "2021-2022",
  },
  {
    program: "Machine Learning Engineer Nanodegree",
    institution: "Udacity",
    period: "2020",
  },
  {
    program: "B.Tech. Computer Science",
    institution: "Mody University of Science & Technology",
    period: "2008-2012",
  },
];

export const certifications: string[] = [
  "Microsoft AZ-900: Azure Fundamentals",
  "Microsoft DP-200: Implementing an Azure Data Solution",
  "Cloudera Certified Hadoop Developer",
  "10Gen Certified MongoDB for Developers & DBA",
  "Azure AI Engineer Associate (AZ-102) - In Progress",
  "Azure Solutions Architect Expert (AZ-305) - In Progress",
];
