import { home_content } from "../../data/raw-page-content/home";
import { req_content } from "../../data/raw-page-content/requirements";
import { research_content } from "../../data/raw-page-content/research";
import { system_design_content } from "../../data/raw-page-content/system-design";
import { implementation_content } from "../../data/raw-page-content/implementation";
import { analysis_content } from "../../data/raw-page-content/analysis";
import { eval_content } from "../../data/raw-page-content/evaluation";
import { appendicies_content } from "../../data/raw-page-content/appendicies";
import { blog_content } from "../../data/raw-page-content/blog";

export const contentList = [
  { name: "", body: home_content },
  { name: "requirements", body: req_content },
  { name: "research", body: research_content },
  { name: "system-design", body: system_design_content },
  { name: "implementation", body: implementation_content },
  { name: "analysis", body: analysis_content },
  { name: "evaluation", body: eval_content },
  { name: "appendix", body: appendicies_content },
  { name: "development-blog", body: blog_content },
];
