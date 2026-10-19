const translations = {
  zh: {
    title: "Shida Huo (霍仕达) - Homepage",
    toggle: "EN",
    "nav.bio": "简介",
    "nav.honors": "荣誉",
    "nav.education": "教育",
    "nav.experience": "研究方向",
    "profile.name": "霍仕达",
    "profile.nameAlt": "Shida Huo",
    "profile.alias": "又名：Huo Shida",
    "profile.motto": "勇敢的人先享受世界。",
    "profile.location": "天津，中国",
    "bio.heading": "简介",
    "bio.p1":
      "我现在是天津大学精密仪器与工程学院博士生，师从胡晓东教授和武恩秀副教授。我目前的研究方向主要聚焦于基于二维光电探测器的超微型计算光谱仪，重点关注二维材料光电响应的多维光谱编码机制，以及压缩感知等重构算法在微型化光谱探测中的应用。此前，我长期从事二维半金属/半导体异质结的低温输运特性研究，在输运物理机制解析方面具有较为系统的研究积累。如果你对相关研究方向感兴趣，欢迎与我联系并开展交流合作。",
    "honors.heading": "荣誉与奖励",
    "honors.item1": "中电仪器“Ceyear思仪”奖学金",
    "honors.item2": "蒋震奖学金",
    "education.heading": "教育经历",
    "education.phd.date": "2025.09 - 至今",
    "education.phd": "博士研究生，精密仪器与光电子工程学院，天津大学",
    "education.master": "硕士研究生，精密仪器与光电子工程学院，天津大学",
    "education.bachelor": "本科，未来技术学院，天津大学",
    "experience.heading": "研究方向",
    "experience.item3.title": "二维光电探测器",
    "experience.item3.paperLabel": "相关论文 / 项目",
    "experience.item1.title": "二维半金属/半导体低温输运特性的研究",
    "experience.item1.paperLabel": "相关论文 / 项目",
    "experience.item2.title": "以突触晶体管为核心的存算一体化器件",
    "experience.item2.paperLabel": "相关论文 / 项目",
  },
  en: {
    title: "Shida Huo - Homepage",
    toggle: "中文",
    "nav.bio": "Bio",
    "nav.honors": "Honors",
    "nav.education": "Education",
    "nav.experience": "Research",
    "profile.name": "Shida Huo",
    "profile.nameAlt": "霍仕达",
    "profile.alias": "Also known as: Huo Shida",
    "profile.motto": "The brave get to enjoy the world first.",
    "profile.location": "Tianjin, China",
    "bio.heading": "Biography",
    "bio.p1":
      "I am currently a Ph.D. student at the School of Precision Instrument and Opto-Electronics Engineering, Tianjin University, advised by Prof. Xiaodong Hu and Associate Prof. Enxiu Wu. My current research focuses on ultraminiaturized computational spectrometers based on two-dimensional photodetectors, with particular emphasis on multidimensional spectral encoding enabled by the photoresponse of two-dimensional materials, as well as the application of reconstruction algorithms such as compressive sensing in miniaturized spectral detection. Previously, I worked extensively on the low-temperature transport properties of two-dimensional semimetal/semiconductor heterostructures, developing systematic research experience in the analysis of transport physics mechanisms. If you are interested in these research areas, please feel free to contact me for discussion and collaboration.",
    "honors.heading": "Honors and Awards",
    "honors.item1": "Ceyear Scholarship, China Electronics Technology Instruments",
    "honors.item2": "Jiang Zhen Scholarship",
    "education.heading": "Educations",
    "education.phd.date": "2025.09 - now",
    "education.phd":
      "Ph.D. student, School of Precision Instrument and Opto-Electronics Engineering, Tianjin University",
    "education.master":
      "M.S. student, School of Precision Instrument and Opto-Electronics Engineering, Tianjin University",
    "education.bachelor": "B.E., School of Future Technology , Tianjin University",
    "experience.heading": "Research Interests",
    "experience.item3.title": "Two-Dimensional Photodetectors",
    "experience.item3.paperLabel": "Related Publications / Projects",
    "experience.item1.title":
      "Low-Temperature Transport Properties of Two-Dimensional Semimetals/Semiconductors",
    "experience.item1.paperLabel": "Related Publications / Projects",
    "experience.item2.title":
      "In-Memory Computing Devices Based on Synaptic Transistors",
    "experience.item2.paperLabel": "Related Publications / Projects",
  },
};

const toggle = document.querySelector("[data-lang-toggle]");
const savedLanguage = localStorage.getItem("language") || "zh";

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = dictionary[element.dataset.i18n];
  });

  toggle.textContent = dictionary.toggle;
  localStorage.setItem("language", language);
}

toggle.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang === "zh-CN" ? "en" : "zh";
  setLanguage(nextLanguage);
});

setLanguage(savedLanguage);
