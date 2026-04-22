/* ── PUBLICATIONS DATA ──────────────────────────────────────── */
// Labels: 'cover','press-release','award','featured','invited','book-chapter'
// extras: { coverImg, coverCaption, pressReleases:[{label,url}], note } — stored in-memory (persists for session)

const PUBLICATIONS = [
  // ── 2026 ──
  { id: 142, year: 2026,
    title: "Efficient and Reversible Chirality Induction between Protein and Achiral Plasmonic Assemblies",
    authors: "Z. Zhou, N. Sun, N. Tverdokhleb, A. Movsesyan, A. M. Steiner, P. T. Probst, …, <strong>Yaroslava G. Yingling</strong>, et al.",
    journal: "Nature Materials", vol: "", doi: "10.1038/s41563-025-02231-7",
    labels: [], topic: ["nanoparticles","biomolecular"] },

  { id: 141, year: 2026,
    title: "A Comprehensive Dataset and Workflow for Building Large-Scale, Highly Oxidized Graphene Oxide Models",
    authors: "Merve Fedai, Albert L. Kwansa, <strong>Yaroslava G. Yingling</strong>",
    journal: "Data", vol: "11(1), 18", doi: "10.3390/data11010018",
    labels: [], topic: ["ai-ml","nanoparticles"] },

  // ── 2025 (new — not yet on lab site numbered list) ──
  { id: 140, year: 2025,
    title: "RL-CURATE-KG: Multi-Agent Reinforcement Learning for Scalable Knowledge Graph Curation",
    authors: "Nahed Abu Zaid, Kara Schatz, D. S. Pendyala, Alexey V. Gulyuk, <strong>Yaroslava G. Yingling</strong>, Rada Chirkova",
    journal: "2025 IEEE International Conference on Big Data (BigData)", vol: "pp. 5737–5746",
    labels: [], topic: ["ai-ml","informatics"] },

  { id: 139, year: 2025,
    title: "Data Integration and Data Fusion Approaches in Self-Driving Labs: A Perspective",
    authors: "Alexey V. Gulyuk, Nahed Abu Zaid, Rada Chirkova, <strong>Yaroslava G. Yingling</strong>",
    journal: "APL Machine Learning", vol: "3(4)", doi: "10.1063/5.0237677",
    labels: [], topic: ["ai-ml","informatics"] },

  { id: 138, year: 2025,
    title: "Oxidation and Laser Synthesis of Ni Nanoparticles: An Atomistic Analysis",
    authors: "A. Toulil, E. Kachan, <strong>Yaroslava G. Yingling</strong>, T. E. Itina",
    journal: "Applied Physics A", vol: "131(11), 916", doi: "10.1007/s00339-025-09174-z",
    labels: [], topic: ["laser","nanoparticles"] },

  { id: 137, year: 2025,
    title: "Computer Vision Pipeline for Image Analysis of Freeze-Fracture Electron Microscopy: Rosette Cellulose Synthase Complexes Case",
    authors: "S. Mudunuri, L. Carbonneau, E. M. Roberts, A. W. Roberts, C. H. Haigler, <strong>Yaroslava G. Yingling</strong>, et al.",
    journal: "Advanced Intelligent Discovery", vol: "e202500116",
    labels: [], topic: ["ai-ml","cellulose"] },

  { id: 136, year: 2025,
    title: "Empirical Evidence That Glucan-Interacting Amino Acid Side Chains within the Transmembrane Channel of Cellulose Synthase Are Critical for Function",
    authors: "Albert L. Kwansa, Arielle M. Chaves, J. T. Del Mundo, E. T. Pierce, E. W. Gomez, <strong>Yaroslava G. Yingling</strong>, et al.",
    journal: "Plant Molecular Biology", vol: "115(4), 85", doi: "10.1007/s11103-025-01579-5",
    labels: [], topic: ["cellulose","biomolecular"] },

  { id: 135, year: 2025,
    title: "DFT-Based Calculation of the Vibrational Sum Frequency Generation Spectrum of Non-centrosymmetric Domains in Crystalline Cellulose",
    authors: "Juseok Choi, Albert L. Kwansa, Inseok Chae, <strong>Yaroslava G. Yingling</strong>, Seong H. Kim",
    journal: "The Journal of Physical Chemistry B", vol: "129(25), 6138–6152", doi: "10.1021/acs.jpcb.5c01234",
    labels: [], topic: ["cellulose","biomolecular"] },

  { id: 134, year: 2025,
    title: "Femtosecond Laser Fabrication of Plasmonic-Magnetic Ni-Au Nanoparticles with Enhanced Magnetic Properties",
    authors: "T. E. Itina, O. Polit, A. Pastukhov, <strong>Y. Yingling</strong>, Z. Swiatkowska-Warkocka, A. Kabashin",
    journal: "SPIE Proceedings — Nanoscale and Quantum Materials", vol: "Vol. 13352, 1335209", doi: "10.1117/12.3049889",
    labels: [], topic: ["laser","nanoparticles"] },

  // ── 2025 ──
  { id: 133, year: 2025,
    title: "Agglomeration of Nanoparticles Inhibits Solvent-Driven Ligand Stripping",
    authors: "Akhlak U. Mahmood, Mehedi H. Rizvi, Joseph B. Tracy, <strong>Yaroslava G. Yingling</strong>",
    journal: "Advanced Materials Interfaces", vol: "12(16), e00234", doi: "10.1002/admi.202500234",
    labels: [], topic: ["nanoparticles"] },

  { id: 131, year: 2025,
    title: "Cloud-based molecular dynamics simulations with AMBER: An interactive \"collabortutorial\" via Google Colab",
    authors: "Merve Fedai, Albert L. Kwansa, <strong>Yaroslava G. Yingling</strong>",
    journal: "Proceedings of the 2025 BIG Research Symposium", vol: "",
    url: "https://ssrn.com/abstract=5282789",
    labels: [], topic: ["ai-ml"] },

  { id: 130, year: 2025,
    title: "Advances in biomimetic carbonic anhydrase strategies for CO₂ capture",
    authors: "Merve Fedai, Jialong Shen, Zsófia Bognár, Albert L. Kwansa, Amy Grunden, Stig Helveg, Sonja Salmon, <strong>Yaroslava G. Yingling</strong>",
    journal: "Trends in Biotechnology", vol: "", doi: "10.1016/j.tibtech.2025.05.025",
    labels: [], topic: ["biomolecular"] },

  { id: 129, year: 2025,
    title: "DFT-based Calculation of Vibrational Sum Frequency Generation Spectrum of Non-Centrosymmetric Domains Interspersed in an Amorphous Matrix",
    authors: "Juseok Choi, Albert L. Kwansa, Inseok Chae, <strong>Yaroslava G. Yingling</strong>, Seong H. Kim",
    journal: "J. Phys. Chem B", vol: "", doi: "10.1021/acs.jpcb.5c00590",
    labels: [], topic: ["biomolecular"] },

  { id: 128, year: 2025,
    title: "Functional hydrogels for selective phosphate removal from water and release on demand",
    authors: "Jiangfeng Xu, Kirill Efimenko, Christopher B. Gorman, <strong>Yaroslava G. Yingling</strong>, Lisa Castellano, Jan Genzer",
    journal: "Langmuir", vol: "", doi: "10.1021/acs.langmuir.5c00679",
    labels: [], topic: ["water","polymer"] },

  { id: 127, year: 2025,
    title: "Design and Characterization of DNA-Driven Condensates: Regulating Topology, Mechanical Properties, and Immunorecognition",
    authors: "Elizabeth Skelly, Christina J. Bayard, Joel Jarusek, Benjamin Clark, Laura Rebolledo, Yasmine Radwan, Phong Nguyen, Melanie Andrade-Muños, Thomas A. Deaton, Alexander Lushnikov, Sharonda J. LeBlanc, Alexey V. Krasnoslobodtsev, <strong>Yaroslava G. Yingling</strong>, Kirill A. Afonin",
    journal: "ACS Applied Materials & Interfaces", vol: "", doi: "10.1021/acsami.5c00428",
    labels: [], topic: ["dna-rna","biomolecular"] },

  { id: 126, year: 2025,
    title: "The Role of AI in Water Quality Management",
    authors: "<strong>Y. G. Yingling</strong>, M. M. Petrova, N. Yingling",
    journal: "Water Conditioning & Purification International Magazine", vol: "March 2025, pp. 20–25",
    url: "https://wcponline.com/2025/03/01/the-role-of-ai-in-water-quality-management/",
    labels: [], topic: ["ai-ml","water"] },

  { id: 125, year: 2025,
    title: "Editorial: Recent Advancements in RNA Technologies, Diagnostics, and Therapeutics",
    authors: "Jaimie Marie Stewart, <strong>Yaroslava G. Yingling</strong>, Kirill A. Afonin, Florent Hubé, Naoyuki Kataoka",
    journal: "Frontiers in Bioengineering and Biotechnology", vol: "13", doi: "10.3389/fbioe.2025.1550225",
    labels: [], topic: ["dna-rna","biomolecular"] },

  // ── 2024 ──
  { id: 124, year: 2024,
    title: "INTEGRATE-KG: A Workflow For Unifying Heterogeneous Data Driven by Shared Languages",
    authors: "Nahed Abu Zaid, Kara Schatz, Kimberly Bourne, Darrell Harry, Christine Hendren, Anna-Maria Marshall, Khara Grieger, Jacob Jones, Alexey V. Gulyuk, <strong>Yaroslava G. Yingling</strong>, Rada Chirkova",
    journal: "2024 IEEE International Conference on Big Data (BigData)", vol: "pp. 3522–3531", doi: "10.1109/BigData62323.2024.10825736",
    labels: [], topic: ["informatics","ai-ml"] },

  { id: 123, year: 2024,
    title: "Multiple Data Imputation Methods Advances Risk Analysis and Treatability of Co-occurring Inorganic Chemicals in Groundwater",
    authors: "Akhlak U. Mahmood, Minhazul Islam, Alexey V. Gulyuk, Emily Briese, Carmen A. Velasco, Mohit Malu, Naushita Sharma, Andreas Spanias, <strong>Yaroslava G. Yingling</strong>, Paul Westerhoff",
    journal: "Environmental Science & Technology", vol: "", doi: "10.1021/acs.est.4c05203",
    labels: ["press-release"],
    extras: { pressReleases: [
      { label: "Machine Learning Predicts Highest-Risk Groundwater Sites — MSE Press Release", url: "" },
      { label: "NSF Press Release", url: "" },
      { label: "Coverage: SMART Water Magazine, Water Online, AAAS EurekAlert!, AlphaGalileo, The National Tribune, Science Daily, PhysOrg, Mirage", url: "" }
    ]},
    topic: ["ai-ml","water","informatics"] },

  { id: 122, year: 2024,
    title: "Bulk Proton Conduction in Films from a Truncated Reflectin Variant",
    authors: "Preeta Pratakshya, Albert L. Kwansa, Matic Kovačič, Nikhil Kaimal, Arsenii Panteleev, Atrouli Chatterjee, Nadia E. Tolouei, Rylan Kautz, Kyle L. Naughton, Barbara Sartori, Benedetta Marmiroli, MyAnh K. Dao, Sigrid Bernstorff, Janez Plavec, <strong>Yaroslava G. Yingling</strong>, Alon A. Gorodetsky",
    journal: "APL Materials", vol: "12, 101113", doi: "10.1063/5.0214285",
    labels: ["featured"],
    extras: { note: "Chosen as an Editor's Pick" },
    topic: ["biomolecular"] },

  { id: 121, year: 2024,
    title: "Monomer Composition as a Mechanism to Control the Self-Assembly of Diblock Oligomeric Peptide–Polymer Amphiphiles",
    authors: "Benjamin P. Allen, Sabila K. Pinky, Emily E. Beard, Abigail A. Gringeri, Nicholas Calzadilla, Matthew A. Sanders, <strong>Yaroslava G. Yingling</strong>, Abigail S. Knight",
    journal: "ACS Nano", vol: "", doi: "10.1021/acsnano.4c08028",
    labels: [], topic: ["polymer","biomolecular"] },

  { id: 120, year: 2024,
    title: "Machine Learning and Small Data-Guided Optimization of Silica Shell Morphology on Gold Nanorods",
    authors: "Akhlak U. Mahmood, Melanie M. Ghelardini, Joseph B. Tracy, <strong>Yaroslava G. Yingling</strong>",
    journal: "Chemistry of Materials", vol: "36, 9330–9340", doi: "10.1021/acs.chemmater.3c03204",
    labels: [], topic: ["ai-ml","nanoparticles"] },

  { id: 119, year: 2024,
    title: "Phosphate-binding protein-loaded iron oxide particles: Adsorption performance for phosphorus removal and recovery from water",
    authors: "Faten B. Hussein, Andrew H. Cannon, Justin M. Hutchison, Christopher B. Gorman, <strong>Yaroslava G. Yingling</strong>, Brooke K. Mayer",
    journal: "Environmental Science: Water Research & Technology", vol: "10, 1219–1232", doi: "10.1039/D4EW00052H",
    labels: [], topic: ["water","biomolecular"] },

  { id: 118, year: 2024,
    title: "BUILD-KG: Integrating Heterogeneous Data Into Analytics-Enabling Knowledge Graphs",
    authors: "Kara Schatz, Pei-Yu Hou, Alexey V. Gulyuk, <strong>Yaroslava G. Yingling</strong>, Rada Chirkova",
    journal: "2023 IEEE International Conference on Big Data (BigData)", vol: "pp. 2965–2974", doi: "10.1109/BigData59044.2023.10386570",
    labels: [], topic: ["informatics","ai-ml"] },

  { id: 117, year: 2024,
    title: "Electrostatic Self-Assembly Induces Efficient Mixed Transport and Water Stability in PEDOT:PSS for High Performance OECTs",
    authors: "Laine Taussig, Masoud Ghasemi, Sanggil Han, Albert L. Kwansa, Ruipeng Li, Nathan Woodward, <strong>Yaroslava G. Yingling</strong>, George G. Malliaras, Enrique D. Gomez, Aram Amassian",
    journal: "Matter", vol: "", doi: "10.2139/ssrn.4484649",
    labels: [], topic: ["polymer"] },

  { id: 116, year: 2024,
    title: "Structural determination of a full-length plant cellulose synthase informed by experimental and in silico methods",
    authors: "Albert L. Kwansa, Abhishek Singh, Justin T. Williams, Candace H. Haigler, Alison W. Roberts, <strong>Yaroslava G. Yingling</strong>",
    journal: "Cellulose", vol: "31, 1429–1447", doi: "10.1007/s10570-023-05691-x",
    labels: ["cover"],
    extras: { note: "Selected for Cover" },
    topic: ["cellulose"] },

  // ── 2023 ──
  { id: 115, year: 2023,
    title: "Provenance-Aware Data Integration and Summarization Querying for Knowledge Graphs",
    authors: "Pei-Yu Hou, Jing Ao, Kara Schatz, Alexey V Gulyuk, <strong>Yaroslava G Yingling</strong>, Rada Chirkova",
    journal: "Lecture Notes in Computer Science, vol 14416, Springer", vol: "", doi: "10.1007/978-3-031-48316-5_29",
    labels: ["award"],
    extras: { note: "Best Paper Award — IIWAS: Information Integration and Web Intelligence Conference 2023, Bali, Indonesia" },
    topic: ["informatics","ai-ml"] },

  { id: 114, year: 2023,
    title: "DFT-Based Calculation of Molecular Hyperpolarizability and SFG Intensity of Symmetric and Asymmetric Stretch Modes of Alkyl Groups",
    authors: "Juseok Choi, Albert L. Kwansa, <strong>Yaroslava G. Yingling</strong>, Seong H. Kim",
    journal: "J. Phys. Chem B", vol: "127, 8456–8467", doi: "10.1021/acs.jpcb.3c03910",
    labels: [], topic: ["biomolecular"] },

  { id: 113, year: 2023,
    title: "Resolving Structure of ssDNA in Solution by Fusing Molecular Simulations and Scattering Experiments with Machine Learning",
    authors: "Thomas J. Oweida, <strong>Yaroslava G. Yingling</strong>",
    journal: "Advanced Theory and Simulations", vol: "6, 2300411", doi: "10.1002/adts.202300411",
    labels: ["cover"],
    extras: { note: "Selected for Cover — DOI: 10.1002/adts.202370027" },
    topic: ["ai-ml","dna-rna"] },

  { id: 112, year: 2023,
    title: "Computer-Assisted Design and Analysis of Nucleic Acid Nanostructures",
    authors: "Christina J. Bayard, <strong>Yaroslava G. Yingling</strong>",
    journal: "Methods in Molecular Biology (Humana Press)", vol: "2709, 31–49", doi: "10.1007/978-1-0716-3417-2_2",
    labels: ["book"], topic: ["dna-rna"] },

  { id: 111, year: 2023,
    title: "Insights into substrate coordination and glycosyl transfer of poplar cellulose synthase-8",
    authors: "Preeti Verma, Ruoya Ho, Albert L. Kwansa, <strong>Yaroslava G. Yingling</strong>, Jochen Zimmer",
    journal: "Structure", vol: "31, 1–8", doi: "10.1016/j.str.2023.07.010",
    labels: [], topic: ["cellulose","biomolecular"] },

  { id: 110, year: 2023,
    title: "Molecular mechanism of plasticizer exudation from polyvinyl chloride",
    authors: "Albert L. Kwansa, Rakhee C. Pani, Joseph A. DeLoach, Arianna Tieppo, Eric J. Moskala, Steven T. Perri, <strong>Yaroslava G. Yingling</strong>",
    journal: "Macromolecules", vol: "56, 4775–4786", doi: "10.1021/acs.macromol.2c01735",
    labels: [], topic: ["polymer"] },

  { id: 109, year: 2023,
    title: "Solvent Effects in Ligand Stripping Behavior of Colloidal Nanoparticles",
    authors: "Akhlak U. Mahmood, Mehedi H. Rizvi, Joseph B. Tracy, <strong>Yaroslava G. Yingling</strong>",
    journal: "ACS Nano", vol: "17, 13319–13332", doi: "10.1021/acsnano.3c01313",
    labels: ["cover"],
    extras: { note: "Selected for Cover" },
    topic: ["nanoparticles"] },

  { id: 108, year: 2023,
    title: "Correlation of Emulsion Chemistry, Film Morphology, and Device Performance in Polyfluorene LEDs Deposited by RIR-MAPLE",
    authors: "Buang Zhang, Sabila K. Pinky, Albert L. Kwansa, Spencer Ferguson, <strong>Yaroslava G. Yingling</strong>, Adrienne D. Stiff-Roberts",
    journal: "ACS Applied Materials & Interfaces", vol: "15, 18153–18165", doi: "10.1021/acsami.3c03012",
    labels: [], topic: ["polymer"] },

  { id: 107, year: 2023,
    title: "Effect of Solvent on the Emulsion and Morphology of Polyfluorene Films: All-atom molecular dynamics approach",
    authors: "Sabila K. Pinky, Albert L. Kwansa, Buang Zhang, Adrienne D. Stiff-Roberts, <strong>Yaroslava G. Yingling</strong>",
    journal: "Soft Matter", vol: "19, 1782–1790", doi: "10.1039/D2SM01001A",
    labels: [], topic: ["polymer"] },

  { id: 106, year: 2023,
    title: "Role of Nanoscale Morphology on the Efficiency of Solvent-Based Desalination Method",
    authors: "James S. Peerless, Alexey V. Gulyuk, Nina J. B. Milliken, Gyu Dong Kim, Elliot Reid, Jae Woo Lee, Dooil Kim, Zachary Hendren, Young Chul Choi, <strong>Yaroslava G. Yingling</strong>",
    journal: "ACS EST Water", vol: "3, 400–409", doi: "10.1021/acsestwater.2c00473",
    labels: [], topic: ["water","nanoparticles"] },

  { id: 105, year: 2023,
    title: "Squid Skin Cell-Inspired Refractive Index Mapping of Cells, Vesicles, and Nanostructures",
    authors: "Atrouli Chatterjee, Preeta Pratakshya, Albert L. Kwansa, Nikhil Kaimal, Andrew Cannon, Barbara Sartori, Benedetta Marmiroli, Helen Orins, Samantha Drake, Justin Couvrette, LeAnn Le, Sigrid Bernstorff, <strong>Yaroslava G. Yingling</strong>, Alon A. Gorodetsky",
    journal: "ACS Biomaterials Science and Engineering", vol: "9, 978–990", doi: "10.1021/acsbiomaterials.2c00088",
    labels: ["cover"],
    extras: { note: "Selected for Cover" },
    topic: ["biomolecular","nanoparticles"] },

  // ── 2022 ──
  { id: 104, year: 2022,
    title: "Gold Nanoparticle Design for dsRNA Compaction",
    authors: "Jessica A. Nash, Matthew D. Manning, Alexey V. Gulyuk, Aleksey E. Kuznetsov, <strong>Yaroslava G. Yingling</strong>",
    journal: "Biointerphases", vol: "17, 061001", doi: "10.1116/6.0002043",
    labels: ["featured","press-release"],
    extras: {
      note: "Selected as a Featured Article; Featured on the AVS newsletter",
      pressReleases: [{ label: "Scilight News Release", url: "https://doi.org/10.1063/10.0014998" }]
    },
    topic: ["nanoparticles","dna-rna"] },

  { id: 103, year: 2022,
    title: "Evidence for Plant-Conserved Region Mediated Trimeric CESAs in Plant Cellulose Synthase Complexes",
    authors: "Juan Du, Venu Gopal Vandavasi, Kelly R. Molloy, Hui Yang, Lynnicia N. Massenburg, Abhishek Singh, Albert L. Kwansa, <strong>Yaroslava G. Yingling</strong>, Hugh O'Neill, Brian T. Chait, Manish Kumar, B. Tracy Nixon",
    journal: "Biomacromolecules", vol: "23, 3663–3677", doi: "10.1021/acs.biomac.2c00550",
    labels: [], topic: ["cellulose","biomolecular"] },

  { id: 102, year: 2022,
    title: "A Comparison between the Lower Critical Solution Temperature Behavior of Polymers and Biomacromolecules",
    authors: "Yuxin Xie, Nan K. Li, Abhishek Singh, Sanket A. Deshmukh, <strong>Yaroslava G. Yingling</strong>",
    journal: "PhysChem", vol: "2, 52–71", doi: "10.3390/physchem2010005",
    labels: ["invited","featured"],
    extras: { note: "Invited Feature Paper; Most Highly Accessed Article; Highlighted on front page" },
    topic: ["polymer","biomolecular"] },

  { id: 101, year: 2022,
    title: "All-Atom Simulation Method for Zeeman Alignment and Dipolar Assembly of Magnetic Nanoparticles",
    authors: "Akhlak U. Mahmood, <strong>Yaroslava G. Yingling</strong>",
    journal: "ACS Journal of Chemical Theory and Computation", vol: "18, 3122–3135", doi: "10.1021/acs.jctc.1c01253",
    labels: ["cover","press-release"],
    extras: { note: "Selected for Front Cover; News release" },
    topic: ["nanoparticles","ai-ml"] },

  { id: 100, year: 2022,
    title: "Mapping the Morphological Landscape of Oligomeric Di-block Peptide-Polymer Amphiphiles",
    authors: "Benjamin P. Allen, Zoe M. Wright, Hailey F. Taylor, Thomas J. Oweida, Sabila Kader-Pinky, Emily F. Patteson, Kara M. Bucci, Caleb A. Cox, Abishec Sundar Senthilvel, <strong>Yaroslava G. Yingling</strong>, Abigail S. Knight",
    journal: "Angewandte Chemie", vol: "61, e202115547", doi: "10.1002/anie.202115547",
    labels: [], topic: ["polymer","biomolecular"] },

  // ── 2021 ──
  { id: 99, year: 2021,
    title: "Controlled Organization of Inorganic Materials Using Biological Molecules for Activating Therapeutic Functionalities",
    authors: "Morgan Chandler, Brian Minevich, Brandon Roark, Mathias Viard, M. Brittany Johnson, Mehedi H. Rizvi, Thomas A. Deaton, Seraphim Kozlov, Martin Panigaj, Joseph B. Tracy, <strong>Yaroslava G. Yingling</strong>, Oleg Gang, Kirill A. Afonin",
    journal: "ACS Applied Materials & Interfaces", vol: "13, 39030–39041",
    labels: [], topic: ["nanoparticles","dna-rna"] },

  { id: 98, year: 2021,
    title: "Insights into Structure and Aggregation Behavior of Elastin-like Polypeptide Coacervates: All-Atom Molecular Dynamics Simulations",
    authors: "Nan K. Li, Yuxin Xie, <strong>Yaroslava G. Yingling</strong>",
    journal: "Journal of Physical Chemistry B", vol: "125, 8627–8635", doi: "10.1021/acs.jpcb.1c02822",
    labels: [], topic: ["polymer","biomolecular"] },

  { id: 97, year: 2021,
    title: "Phenotypic effects of changes in the FTVTxK region of an Arabidopsis secondary wall cellulose synthase compared with results from analogous mutations in other isoforms",
    authors: "Jason N. Burris, Mohamadamin Makarem, Erin Slabaugh, Arielle Chaves, Ethan T. Pierce, Jongcheol Lee, Sarah N. Kiemle, Albert L. Kwansa, Abhishek Singh, <strong>Yaroslava G. Yingling</strong>, Alison W. Roberts, Seong H. Kim, Candace H. Haigler",
    journal: "Plant Direct", vol: "5, e355", doi: "10.1002/pld3.335",
    labels: ["award"],
    extras: { note: "Awarded Top Cited Article 2021–2022 by Wiley" },
    topic: ["cellulose"] },

  { id: 96, year: 2021,
    title: "Uncertainty Quantification and Sensitivity Analysis of Partial Charges on Macroscopic Solvent Properties in Molecular Dynamics Simulations with Machine Learning Model",
    authors: "James S. Peerless, Albert L. Kwansa, Branden S. Hawkins, Ralph C. Smith, <strong>Yaroslava G. Yingling</strong>",
    journal: "ACS Journal of Chemical Information and Modeling", vol: "61, 1745–1761", doi: "10.1021/acs.jcim.0c01204",
    labels: ["cover"],
    extras: { note: "Selected for journal cover page" },
    topic: ["ai-ml","informatics"] },

  { id: 95, year: 2021,
    title: "Weakly Ionically Bound Thermo-sensitive Hyperbranched Polymers",
    authors: "Hansol Lee, Aleksandr Stryutsky, Akhlak-Ul Mahmood, Abhishek Singh, Valery V. Shevchenko, <strong>Yaroslava G. Yingling</strong>, Vladimir V. Tsukruk",
    journal: "Langmuir", vol: "37, 2913–2927", doi: "10.1021/acs.langmuir.0c03487",
    labels: [], topic: ["polymer"] },

  { id: 94, year: 2021,
    title: "Assessment of AMBER Force Fields for Simulations of ssDNA Structure",
    authors: "Thomas J. Oweida, Ho Shin Kim, Abhishek Singh, <strong>Yaroslava G. Yingling</strong>",
    journal: "ACS Journal of Chemical Theory and Computation", vol: "17, 1208–1217", doi: "10.1021/acs.jctc.0c00931",
    labels: ["featured"],
    extras: { note: "Recommended in Faculty Opinions (F1000Prime) as being of special significance in its field" },
    topic: ["dna-rna","ai-ml"] },

  // ── 2020 ──
  { id: 93, year: 2020,
    title: "Structure, Self-Assembly, and Properties of a Truncated Reflectin Variant",
    authors: "Mehran J. Umerani, Preeta Pratakshya, Atrouli Chatterjee, Juana A. Cerna Sanchez, Ho Shin Kim, Gregor Ilc, Matic Kovačič, Christophe Magnan, Benedetta Marmiroli, Barbara Sartori, Albert L. Kwansa, Helen Orins, Andrew W. Bartlett, Erica M. Leung, Zhijing Feng, Kyle L. Naughton, Brenna Norton-Baker, Long Phan, James Long, Alex Allevato, Jessica E. Leal-Cruz, Qiyin Lin, Pierre Baldi, Sigrid Bernstorff, Janez Plavec, <strong>Yaroslava G. Yingling</strong>, Alon A. Gorodetsky",
    journal: "Proceedings of the National Academy of Sciences (PNAS)", vol: "117, 32891–32901", doi: "10.1073/pnas.2009044117",
    labels: [], topic: ["biomolecular"] },

  { id: 92, year: 2020,
    title: "Co-assembling Polysaccharide Nanocrystals and Nanofibers for Robust Chiral Iridescent Films",
    authors: "Rui Xiong, Abhishek Singh, Shengtao Yu, Shuaidi Zhang, Hansol Lee, <strong>Yaroslava G. Yingling</strong>, Dhriti Nepal, Timothy J. Bunning, Vladimir V. Tsukruk",
    journal: "ACS Applied Materials & Interfaces", vol: "12, 35345–35353", doi: "10.1021/acsami.0c08571",
    labels: [], topic: ["polymer","biomolecular"] },

  { id: 91, year: 2020,
    title: "Partially fluorinated copolymers as oxygen sensitive ¹⁹F MRI agents",
    authors: "Nicholas G Taylor, Sang Hun Chung, Albert L Kwansa, Robert R Johnson III, Aaron J Teator, Nina J B Milliken, Karl M Koshlap, <strong>Yaroslava G Yingling</strong>, Yueh Z Lee, Frank Leibfarth",
    journal: "Chemistry – A European Journal", vol: "26, 9982–9990", doi: "10.1002/chem.202001505",
    labels: [], topic: ["polymer"] },

  { id: 90, year: 2020,
    title: "In silico structure prediction of full-length cotton cellulose synthase protein (GhCESA1) and its hierarchical complexes",
    authors: "Abhishek Singh, Albert L. Kwansa, Ho Shin Kim, Justin T. Williams, Hui Yang, Nan K. Li, James D. Kubicki, Alison W. Roberts, Candace H. Haigler, <strong>Yaroslava G. Yingling</strong>",
    journal: "Cellulose", vol: "27, 5597–5616", doi: "10.1007/s10570-020-03194-7",
    labels: [], topic: ["cellulose"] },

  { id: 89, year: 2020,
    title: "Anisotropic optical and frictional properties of Langmuir–Blodgett film consisting of uniaxially-aligned rod-shaped cellulose nanocrystals",
    authors: "Inseok Chae, Dien Ngo, Zhe Chen, Albert L. Kwansa, Xing Chen, Amira Barhoumi Meddeb, Nikolas J. Podraza, <strong>Yaroslava G. Yingling</strong>, Zoubeida Ounaies, Seong H. Kim",
    journal: "Advanced Materials Interfaces", vol: "7, 1902169", doi: "10.1002/admi.201902169",
    labels: [], topic: ["cellulose","biomolecular"] },

  { id: 88, year: 2020,
    title: "Merging Materials and Data Science: Opportunities, Challenges, and Education in Materials Informatics",
    authors: "Thomas J. Oweida, Akhlak Ul-Mahmood, Matthew D. Manning, Sergei Rigin, <strong>Yaroslava G. Yingling</strong>",
    journal: "MRS Advances", vol: "5, 1–18", doi: "10.1557/adv.2020.171",
    labels: ["featured","invited"],
    extras: { note: "Highlighted in MRS Materials 360 Newsletter, Volume 20, Issue 7" },
    topic: ["informatics","ai-ml"] },

  { id: 87, year: 2020,
    title: "Effect of octadecylamine surfactant concentration on DNA structure on graphene surfaces",
    authors: "Ho Shin Kim, Nathanael A. Brown, Stefan Zauscher, <strong>Yaroslava G. Yingling</strong>",
    journal: "Langmuir", vol: "36, 931–938", doi: "10.1021/acs.langmuir.9b02926",
    labels: [], topic: ["dna-rna","nanoparticles"] },

  { id: 86, year: 2020,
    title: "Materials matter in phosphorus sustainability",
    authors: "Jacob L. Jones, <strong>Yaroslava G. Yingling</strong>, Ian M. Reaney, Paul Westerhoff",
    journal: "MRS Bulletin", vol: "45(1), 7–10", doi: "10.1557/mrs.2020.4",
    labels: [], topic: ["water","informatics"] },

  // ── 2019 ──
  { id: 85, year: 2019,
    title: "Intrinsically disordered proteins access a range of hysteretic phase separation behaviors",
    authors: "Felipe Garcia Quiroz, Nan K. Li, Stefan Roberts, Isaac Weitzhandler, <strong>Yaroslava G Yingling</strong>, Ashutosh Chilkoti",
    journal: "Science Advances", vol: "5, eaax5177", doi: "10.1126/sciadv.aax5177",
    labels: [], topic: ["biomolecular","polymer"] },

  { id: 84, year: 2019,
    title: "Biochemical and physiological flexibility accompanies reduced cellulose biosynthesis in cesa1^S830N^",
    authors: "Chad Bradham, Abhishek Singh, Jozsef Stork, Ying Rong, Indrajit Kumar, Kazuhiro Kikuchi, <strong>Yaroslava G. Yingling</strong>, Tom P. Brutnell, Jocelyn K. C. Rose, Seth DeBolt",
    journal: "AoB PLANTS", vol: "11, plz041", doi: "10.1093/aobpla/plz041",
    labels: [], topic: ["cellulose"] },

  { id: 83, year: 2019,
    title: "Simulations of Cellulose Synthesis Initiation and Termination in Bacteria",
    authors: "Hui Yang, John McManus, Daniel Oehme, Abhishek Singh, <strong>Yaroslava G. Yingling</strong>, Ming Tien, James D. Kubicki",
    journal: "J. Phys. Chem B", vol: "123, 3699–3705", doi: "10.1021/acs.jpcb.9b02433",
    labels: ["cover"],
    extras: { note: "Selected for journal cover page" },
    topic: ["cellulose"] },

  { id: 82, year: 2019,
    title: "Dissipative Particle Dynamics Approaches to Modeling Self-Assembly and Morphology of Block Copolymers in Solution",
    authors: "Thomas A. Deaton, Fikret Aydin, Nan K. Li, Xiaolei Chu, Meenakshi Dutt, <strong>Yaroslava Yingling</strong>",
    journal: "Foundations of Molecular Modeling and Simulation (Springer, book chapter)", vol: "", doi: "10.1007/978-981-33-6639-8_4",
    labels: ["book"], topic: ["polymer"] },

  { id: 81, year: 2019,
    title: "High Performance Chromatographic Characterization of Surface Chemical Heterogeneities of Fluorescent Organic-Inorganic Hybrid Core-Shell Silica Nanoparticles",
    authors: "Tom C. Gardinier, Ferdinand F. E. Kohle, James S. Peerless, Kai Ma, Melik Z. Turker, Joshua A. Hinckley, <strong>Yaroslava G. Yingling</strong>, Ulrich Wiesner",
    journal: "ACS Nano", vol: "13(2), 1795–1804", doi: "10.1021/acsnano.8b07876",
    labels: [], topic: ["nanoparticles"] },

  // ── 2018 ──
  { id: 80, year: 2018,
    title: "Progress in ligand design for monolayer-protected nanoparticles for nano-bio interfaces",
    authors: "Matthew D. Manning, Albert L. Kwansa, Thomas Oweida, James Peerless, Abhishek Singh, <strong>Yaroslava G. Yingling</strong>",
    journal: "Biointerphases", vol: "13, 06D502", doi: "10.1116/1.5044381",
    labels: ["featured","press-release","invited"],
    extras: {
      note: "Selected as a Featured Article (invited review)",
      pressReleases: [{ label: "Scilight News Release", url: "https://doi.org/10.1063/1.5081027" }]
    },
    topic: ["nanoparticles","biomolecular"] },

  { id: 79, year: 2019,
    title: "Soft Matter Informatics: Current Progress and Challenges",
    authors: "James S. Peerless, Nina J. B. Milliken, Matthew D. Manning, Thomas J. Oweida, <strong>Yaroslava G. Yingling</strong>",
    journal: "Advanced Theory and Simulations", vol: "2, 1800129", doi: "10.1002/adts.201800129",
    labels: ["featured","invited","award"],
    extras: { note: "Top downloaded paper 2018–2019 (Wiley); Highlighted in 'Progress in Machine Learning' issue (invited review)" },
    topic: ["informatics","ai-ml"] },

  { id: 78, year: 2018,
    title: "Bathophenanthroline Disulfonate Ligand-induced Self-assembly of Ir(III) Complexes in Water: An Intriguing Class of Photoluminescent Soft Materials",
    authors: "Michelle M. McGoorty, Abhishek Singh, Thomas A. Deaton, Benjamin Peterson, Chelsea M. Taliaferro, <strong>Yaroslava G. Yingling</strong>, Felix N. Castellano",
    journal: "ACS Omega", vol: "3, 14027–14038", doi: "10.1021/acsomega.8b02034",
    labels: [], topic: ["biomolecular","polymer"] },

  { id: 77, year: 2018,
    title: "Enzymatic Synthesis of Nucleobase-Modified Single-Stranded DNA Offers Tunable Resistance to Nuclease Degradation",
    authors: "Renpeng Gu, Thomas Oweida, <strong>Yaroslava G. Yingling</strong>, Ashutosh Chilkoti, Stefan Zauscher",
    journal: "Biomacromolecules", vol: "19, 3525–3535", doi: "10.1021/acs.biomac.8b00816",
    labels: [], topic: ["dna-rna","biomolecular"] },

  { id: 76, year: 2018,
    title: "Sequence directionality dramatically affects LCST behavior of elastin-like polypeptides",
    authors: "Nan K. Li, Stefan Roberts, Felipe Garcia Quiroz, Ashutosh Chilkoti, <strong>Yaroslava G. Yingling</strong>",
    journal: "Biomacromolecules", vol: "19, 2496–2505", doi: "10.1021/acs.biomac.8b00099",
    labels: [], topic: ["polymer","biomolecular"] },

  { id: 75, year: 2018,
    title: "Hairy Graphenes: Wrapping Nanocellulose Nets around Graphene Oxide Sheets",
    authors: "Rui Xiong, Ho Shin Kim, Lijuan Zhang, Volodymyr F. Korolovych, Shuaidi Zhang, <strong>Yaroslava G. Yingling</strong>, Vladimir V. Tsukruk",
    journal: "Angewandte Chemie", vol: "130, 8644–8649", doi: "10.1002/anie.201803076",
    labels: [], topic: ["cellulose","nanoparticles"] },

  { id: 74, year: 2018,
    title: "Cellulose synthase 'class specific regions' are intrinsically disordered and functionally undifferentiated",
    authors: "Tess R. Scavuzzo-Duggan, Arielle M. Chaves, Abhishek Singh, Latsavongsakda Sethaphong, Erin Slabaugh, <strong>Yaroslava G. Yingling</strong>, Candace H. Haigler, Alison W. Roberts",
    journal: "Journal of Integrative Plant Biology", vol: "60, 481–497", doi: "10.1111/jipb.12637",
    labels: [], topic: ["cellulose"] },

  { id: 73, year: 2018,
    title: "Interfacial Stability of Graphene-based Surfaces in Water and Organic Solvents",
    authors: "Ho Shin Kim, Thomas J. Oweida, <strong>Yaroslava G. Yingling</strong>",
    journal: "Journal of Materials Science (Invited Special Issue)", vol: "53(8), 5766–5776", doi: "10.1007/s10853-017-1893-9",
    labels: ["award","invited"],
    extras: { note: "Selected as Springer April finalist for the 2018 Cahn Prize" },
    topic: ["nanoparticles","informatics"] },

  { id: 72, year: 2018,
    title: "Functional Modification of Silica through Enhanced Adsorption of Elastin-Like Polypeptide Block Copolymers",
    authors: "Linying Li, Nan K. Li, Qing Tu, Owen Im, Chia-Kuei Mo, Wei Han, William H. Fuss, Nick J. Carroll, Ashutosh Chilkoti, <strong>Yaroslava G. Yingling</strong>, Stefan Zauscher, Gabriel P. López",
    journal: "Biomacromolecules", vol: "19, 298–306", doi: "10.1021/acs.biomac.7b01307",
    labels: [], topic: ["polymer","biomolecular"] },

  // ── 2017 ──
  { id: 71, year: 2017,
    title: "Template-Guided Assembly of Silk Fibroin on Cellulose Nanofibers for Robust Nanostructures with Ultrafast Water Transport",
    authors: "Rui Xiong, Ho Shin Kim, Shuaidi Zhang, Sunghan Kim, Volodymyr F. Korolovych, Ruilong Ma, <strong>Yaroslava G. Yingling</strong>, Canhui Lu, Vladimir V. Tsukruk",
    journal: "ACS Nano", vol: "11, 12008–12019", doi: "10.1021/acsnano.7b04235",
    labels: [], topic: ["cellulose","biomolecular"] },

  { id: 70, year: 2017,
    title: "Salt responsive morphologies of ssDNA-based triblock polyelectrolytes in semi-dilute regime",
    authors: "Nan K. Li, Huihui Kuang, William H. Fuss, Stefan Zauscher, Efrosini Kokkoli, <strong>Yaroslava G. Yingling</strong>",
    journal: "Macromolecular Rapid Communications", vol: "38, 1700422", doi: "10.1002/marc.201700422",
    labels: ["cover"],
    extras: { note: "Selected for journal cover page" },
    topic: ["dna-rna","polymer"] },

  { id: 69, year: 2017,
    title: "Effect of C₆₀ Adducts on the Dynamic Structure of Aromatic Solvation Shells",
    authors: "James S. Peerless, G. Hunter Bowers, Albert L. Kwansa, <strong>Yaroslava G. Yingling</strong>",
    journal: "Chemical Physics Letters", vol: "678, 79–84", doi: "10.1016/j.cplett.2017.04.010",
    labels: [], topic: ["nanoparticles"] },

  { id: 68, year: 2017,
    title: "Interfacial Mechanical Properties of Graphene on Self Assembly Monolayers: Experiments and Simulations",
    authors: "Qing Tu, Ho Shin Kim, Thomas J. Oweida, Zehra Parlak, <strong>Yaroslava G. Yingling</strong>, Stefan Zauscher",
    journal: "ACS Applied Materials and Interfaces", vol: "9, 10203–10213", doi: "10.1021/acsami.6b16593",
    labels: [], topic: ["nanoparticles","biomolecular"] },

  { id: 67, year: 2017,
    title: "Effect of graphene oxidation rate on adsorption of poly-thymine single stranded DNA",
    authors: "Ho Shin Kim, Barry L. Farmer, <strong>Yaroslava G. Yingling</strong>",
    journal: "Advanced Materials Interfaces", vol: "", doi: "10.1002/admi.201601168",
    labels: ["cover"],
    extras: { note: "Selected for journal cover page" },
    topic: ["dna-rna","nanoparticles"] },

  { id: 66, year: 2017,
    title: "Advances in Molecular Modeling of Nanoparticle-Nucleic Acid Interfaces",
    authors: "Jessica Nash, Albert Kwansa, James Peerless, Hoshin Kim, <strong>Yaroslava G. Yingling</strong>",
    journal: "Bioconjugate Chemistry", vol: "28, 3–10", doi: "10.1021/acs.bioconjchem.6b00534",
    labels: ["cover","invited"],
    extras: { note: "Selected for journal cover page (invited)" },
    topic: ["nanoparticles","dna-rna"] },

  // ── 2016 ──
  { id: 65, year: 2016,
    title: "Fluorescence blinking as an output signal for biosensing",
    authors: "Brandon Roark, Anna Ivanina, Morgan Chandler, Jose Castaneda, Ho Shin Kim, Shriram Jawahar, Mathias Viard, Strahinja Talic, Kristin Wustholz, <strong>Yaroslava G. Yingling</strong>, Marcus Jones, Kirill A. Afonin",
    journal: "ACS Sensors", vol: "1, 1295–1300", doi: "10.1021/acssensors.6b00352",
    labels: [], topic: ["dna-rna","biomolecular"] },

  { id: 64, year: 2016,
    title: "Binding of single stranded nucleic acids to ligand functionalized gold nanoparticles",
    authors: "Jessica A. Nash, Tasha L. Tucker, William Therriault, <strong>Yaroslava G. Yingling</strong>",
    journal: "Biointerphases", vol: "11, 04B305", doi: "10.1116/1.4966653",
    labels: [], topic: ["dna-rna","nanoparticles"] },

  { id: 63, year: 2016,
    title: "Silk Fibroin–Substrate Interactions at Heterogeneous Nanocomposite Interfaces",
    authors: "Anise M. Grant, Ho Shin Kim, Trisha L. Dupnock, Kesong Hu, <strong>Yaroslava G. Yingling</strong>, Vladimir V. Tsukruk",
    journal: "Advanced Functional Materials", vol: "26, 6380–6392", doi: "10.1002/adfm.201601268",
    labels: ["cover"],
    extras: { note: "Selected for journal cover page" },
    topic: ["biomolecular","polymer"] },

  { id: 62, year: 2016,
    title: "Emulsion-based RIR-MAPLE deposition of conjugated polymers: primary solvent effect and its implications on organic solar cell performance",
    authors: "Wangyao Ge, Nan K. Li, Ryan D. McCormick, Eli Lichtenberg, <strong>Yaroslava G. Yingling</strong>, Adrienne D. Stiff-Roberts",
    journal: "ACS Applied Materials and Interfaces", vol: "8, 19494–19506", doi: "10.1021/acsami.6b05596",
    labels: [], topic: ["polymer"] },

  { id: 61, year: 2016,
    title: "Comparative structural and computational analysis supports eighteen cellulose synthases in the plant cellulose synthesis complex",
    authors: "B. Tracy Nixon, Katayoun Mansouri, Abhishek Singh, Juan Du, Jonathan K. Davis, Jung-Goo Lee, Erin Slabaugh, Venu Gopal Vandavasi, Hugh O'Neill, Eric. M. Roberts, Alison W. Roberts, <strong>Yaroslava G. Yingling</strong>, Candace H. Haigler",
    journal: "Scientific Reports", vol: "6, 28696", doi: "10.1038/srep28696",
    labels: [], topic: ["cellulose"] },

  { id: 60, year: 2016,
    title: "The effect of imidazolium cations on the structure and activity of the Candida antarctica Lipase B enzyme in ionic liquids",
    authors: "Ho Shin Kim, Doyoung Eom, Yoon-Mo Koo, <strong>Yaroslava G. Yingling</strong>",
    journal: "Physical Chemistry Chemical Physics", vol: "18, 22062–22069", doi: "10.1039/C6CP02355J",
    labels: ["cover"],
    extras: { note: "Selected for journal cover page" },
    topic: ["biomolecular"] },

  { id: 59, year: 2016,
    title: "Sequence dependent interaction of single stranded DNA with graphitic flakes: atomistic molecular dynamics simulations",
    authors: "Ho Shin Kim, Sabrina M. Huang, <strong>Yaroslava G. Yingling</strong>",
    journal: "MRS Advances", vol: "1(25), 1883–1889", doi: "10.1557/adv.2016.91",
    labels: [], topic: ["dna-rna","nanoparticles"] },

  { id: 58, year: 2016,
    title: "Design of potent and controllable anticoagulants using DNA aptamers and nanostructures",
    authors: "Abhijit Rangnekar, Jessica A Nash, Bethany Goodfred, <strong>Yaroslava G. Yingling</strong>, Thomas LaBean",
    journal: "Molecules", vol: "21, 202", doi: "10.3390/molecules21020202",
    labels: [], topic: ["dna-rna","biomolecular"] },

  { id: 57, year: 2016,
    title: "LCST Behavior is Manifested in a Single Molecule: Elastin-like polypeptide (VPGVG)ₙ",
    authors: "Binwu Zhao, Nan K. Li, <strong>Yaroslava G. Yingling</strong>, Carol K. Hall",
    journal: "Biomacromolecules", vol: "17, 111–118", doi: "10.1021/acs.biomac.5b01235",
    labels: [], topic: ["polymer","biomolecular"] },

  // ── 2015 ──
  { id: 56, year: 2015,
    title: "Na⁺-Dependent Anion Transport by a Barley Efflux Protein Revealed through an Integrative Platform",
    authors: "Yagnesh Nagarajan et al., <strong>Yaroslava G. Yingling</strong>, Maria Hrmova",
    journal: "Plant Cell", vol: "28, 202–218", doi: "10.1105/tpc.15.00625",
    labels: ["press-release"],
    extras: { pressReleases: [{ label: "Reported in Phys.Org and briefly by K. L. Farquharson", url: "" }] },
    topic: ["cellulose","biomolecular"] },

  { id: 55, year: 2015,
    title: "Prediction of the structures of the plant-specific regions of vascular plant cellulose synthases and correlated functional analysis",
    authors: "Latsavongsakda Sethaphong, Jonathan K. Davis, Erin Slabaugh, Abhishek Singh, Candace H. Haigler, <strong>Yaroslava G. Yingling</strong>",
    journal: "Cellulose", vol: "23, 145–161", doi: "10.1007/s10570-015-0789-6",
    labels: ["cover"],
    extras: { note: "Selected for journal cover page" },
    topic: ["cellulose"] },

  { id: 54, year: 2015,
    title: "Fullerenes in Aromatic Solvents: Correlation between Solvation Shell Structure, Solvate Formation, and Solubility",
    authors: "James S. Peerless, G. Hunter Bowers, Albert L. Kwansa, <strong>Yaroslava G. Yingling</strong>",
    journal: "J. Phys. Chem. B", vol: "119, 15344–15352", doi: "10.1021/acs.jpcb.5b09386",
    labels: [], topic: ["nanoparticles"] },

  { id: 53, year: 2015,
    title: "Characterization of nucleic acid compaction with histone-mimic nanoparticles through all-atom molecular dynamics",
    authors: "Jessica A. Nash, Abhishek Singh, Nan K. Li, <strong>Yaroslava G. Yingling</strong>",
    journal: "ACS Nano", vol: "9, 12374–12382", doi: "10.1021/acsnano.5b05684",
    labels: [], topic: ["nanoparticles","dna-rna"] },

  { id: 52, year: 2015,
    title: "Microtubules and cellulose biosynthesis: the emergence of new players",
    authors: "Shundai Li, Lei Lei, <strong>Yaroslava G. Yingling</strong>, Ying Gu",
    journal: "Current Opinion in Plant Biology", vol: "28, 76–82", doi: "10.1016/j.pbi.2015.09.002",
    labels: [], topic: ["cellulose"] },

  { id: 51, year: 2015,
    title: "Cellulose synthase interactive 1 is required for a fast recycling of cellulose synthase complexes to the plasma membrane in Arabidopsis",
    authors: "Lei Lei, Abhishek Singh, Logan Bashline, Shundai Li, <strong>Yaroslava G. Yingling</strong>, Ying Gu",
    journal: "Plant Cell", vol: "", doi: "10.1105/tpc.15.00442",
    labels: [], topic: ["cellulose"] },

  { id: 50, year: 2015,
    title: "Prediction of salt-dependent changes in morphology of polyelectrolyte block copolymers",
    authors: "Nan K. Li, W. H. Fuss, L. Tang, R. Gu, A. Chilkoti, S. Zauscher, <strong>Yaroslava G. Yingling</strong>",
    journal: "Soft Matter", vol: "11, 8236–8245", doi: "10.1039/C5SM01742D",
    labels: ["cover"],
    extras: { note: "Selected for journal cover page" },
    topic: ["polymer","dna-rna"] },

  { id: 49, year: 2015,
    title: "How cellulose elongates – A QM/MM study of the molecular mechanism of cellulose polymerization in bacteria CESA",
    authors: "Hui Yang, J. Zimmer, <strong>Yaroslava G. Yingling</strong>, J. D. Kubicki",
    journal: "Journal of Physical Chemistry B", vol: "119, 6525–6535", doi: "10.1021/acs.jpcb.5b01433",
    labels: [], topic: ["cellulose"] },

  { id: 48, year: 2015,
    title: "An implicit ionic strength solvent (ISIS) method to model polyelectrolyte systems with dissipative particle dynamics",
    authors: "Nan K. Li, W. H. Fuss, <strong>Yaroslava G. Yingling</strong>",
    journal: "Macromolecular Theory and Simulations", vol: "24, 7–12", doi: "10.1002/mats.201400043",
    labels: ["cover","featured","press-release"],
    extras: {
      note: "Selected for journal cover page; Chosen as Featured Article",
      pressReleases: [{ label: "Press Release: Researchers Develop Models to Study Polyelectrolytes, Including DNA and RNA", url: "" }]
    },
    topic: ["polymer","dna-rna"] },

  // ── 2014 ──
  { id: 47, year: 2014,
    title: "Molecular description of the LCST behavior of an elastin-like polypeptide",
    authors: "Nan K. Li, F. García Quiroz, C. K. Hall, A. Chilkoti, <strong>Yaroslava G. Yingling</strong>",
    journal: "Biomacromolecules", vol: "15, 3522–3530", doi: "10.1021/bm500658w",
    labels: [], topic: ["polymer","biomolecular"] },

  { id: 46, year: 2014,
    title: "Computational and genetic evidence that different structural conformations of a non-catalytic region in cellulose synthase (CESA) affect CESA function",
    authors: "Erin Slabaugh, L. Sethaphong, C. Xiao, J. Amick, C. T. Anderson, C. H. Haigler, <strong>Yaroslava G. Yingling</strong>",
    journal: "Journal of Experimental Botany", vol: "65, 6645–6653", doi: "10.1093/jxb/eru383",
    labels: [], topic: ["cellulose"] },

  { id: 45, year: 2014,
    title: "Progress in molecular modeling of DNA materials",
    authors: "Nan K. Li, H. S. Kim, J. A. Nash, M. Lim, <strong>Yaroslava G. Yingling</strong>",
    journal: "Molecular Simulation", vol: "40, 777–783", doi: "10.1080/08927022.2014.913792",
    labels: ["invited"], topic: ["dna-rna","informatics"] },

  { id: 44, year: 2014,
    title: "Enzymatic polymerization of high molecular weight DNA amphiphiles that self-assemble into star-like micelles",
    authors: "Lei Tang, V. Tjong, N. Li, <strong>Yaroslava G. Yingling</strong>, A. Chilkoti, S. Zauscher",
    journal: "Advanced Materials", vol: "26, 3050–3054", doi: "10.1002/adma.201306049",
    labels: [], topic: ["dna-rna","polymer"] },

  { id: 43, year: 2014,
    title: "The relationship between enhanced enzyme activity and structural dynamics in ionic liquids: a combined computational and experimental study",
    authors: "Ho S. Kim, S. H. Ha, L. Sethaphong, Y.-M. Koo, <strong>Yaroslava G. Yingling</strong>",
    journal: "Physical Chemistry Chemical Physics", vol: "16, 2944–2953", doi: "10.1039/C3CP52516C",
    labels: [], topic: ["biomolecular"] },

  // ── 2013 ──
  { id: 42, year: 2013,
    title: "Cellulose synthases: new insights from crystallography and modeling",
    authors: "Erin Slabaugh, J. K. Davis, C. H. Haigler, <strong>Yaroslava G. Yingling</strong>, J. Zimmer",
    journal: "Trends in Plant Science", vol: "19, 99–106", doi: "10.1016/j.tplants.2013.09.009",
    labels: [], topic: ["cellulose"] },

  { id: 41, year: 2013,
    title: "Correlating fullerenes diffusion with polythiophene morphology: molecular dynamics simulations",
    authors: "Rakhee C. Pani, B. D. Bond, G. Krishnan, <strong>Yaroslava G. Yingling</strong>",
    journal: "Soft Matter", vol: "9, 10048–10055", doi: "10.1039/C3SM51906F",
    labels: [], topic: ["polymer","nanoparticles"] },

  { id: 40, year: 2013,
    title: "Tertiary model of a plant cellulose synthase",
    authors: "Latsavongsakda Sethaphong, C. H. Haigler, J. D. Kubicki, J. Zimmer, D. Bonetta, S. DeBolt, <strong>Yaroslava G. Yingling</strong>",
    journal: "Proceedings of the National Academy of Sciences (PNAS)", vol: "110, 7512–7517", doi: "10.1073/pnas.1301027110",
    labels: ["featured","press-release"],
    extras: {
      note: "F1000 Prime recommended for 'exciting leap in the field'",
      pressReleases: [{ label: "Press Release: Plant Protein Shape Puzzle Solved by Molecular 3-D Model", url: "" }]
    },
    topic: ["cellulose"] },

  { id: 39, year: 2013,
    title: "X3DBio2: A Visual Analysis Tool for Biomolecular Structure Exploration",
    authors: "H. Yi, S. Thakur, L. Sethaphong, <strong>Yaroslava G. Yingling</strong>",
    journal: "Proc. SPIE", vol: "8654 VDA, 86540W", doi: "10.1117/12.2002626",
    labels: [], topic: ["informatics"] },

  // ── 2012 ──
  { id: 38, year: 2012,
    title: "The effect of point mutations on structure and mechanical properties of collagen-like fibril: a molecular dynamics study",
    authors: "Ashley E. Marlowe, A. Singh, <strong>Yaroslava G. Yingling</strong>",
    journal: "Materials Science and Engineering C", vol: "32, 2583–2588", doi: "10.1016/j.msec.2012.07.044",
    labels: [], topic: ["biomolecular"] },

  { id: 37, year: 2012,
    title: "Role of solvent and dendritic architecture on the redox core encapsulation",
    authors: "Rakhee Pani, <strong>Yaroslava G. Yingling</strong>",
    journal: "Journal of Physical Chemistry A", vol: "116, 7593–7599", doi: "10.1021/jp304253g",
    labels: [], topic: ["polymer"] },

  { id: 36, year: 2012,
    title: "Weakly Charged Cationic Nanoparticles Induce DNA Bending and Strand Separation",
    authors: "Justin G. Railsback, A. Singh, R. C. Pearce, T. E. McKnight, R. Collazo, Z. Sitar, <strong>Yaroslava G. Yingling</strong>, Anatoli V. Melechko",
    journal: "Advanced Materials", vol: "24, 4261–4265", doi: "10.1002/adma.201104891",
    labels: ["cover","press-release"],
    extras: {
      note: "Selected for journal cover page",
      pressReleases: [{ label: "Press Release: Researchers Find Gold Nanoparticles Capable of 'Unzipping' DNA", url: "" }]
    },
    topic: ["nanoparticles","dna-rna"] },

  { id: 35, year: 2012,
    title: "X3DBio: A Visual Analysis Tool for Biomolecular Structure Exploration",
    authors: "H. Yi, A. Singh, <strong>Yaroslava G. Yingling</strong>",
    journal: "Proc. SPIE", vol: "8294, 82940S", doi: "10.1117/12.906893",
    labels: [], topic: ["informatics"] },

  { id: 34, year: 2012,
    title: "The role of hydrogen bonding in water-mediated glucose solubility in ionic liquids",
    authors: "Ho S. Kim, R. Pani, S. H. Ha, Y.-M. Koo, <strong>Yaroslava G. Yingling</strong>",
    journal: "Journal of Molecular Liquids", vol: "166, 25–30", doi: "10.1016/j.molliq.2011.11.008",
    labels: [], topic: ["biomolecular"] },

  { id: 33, year: 2012,
    title: "Perspective on nanoparticle-biomolecules interactions from molecular dynamics simulations",
    authors: "Melissa A. Pasquinelli, <strong>Yaroslava G. Yingling</strong>",
    journal: "Encyclopedia of Nanotechnology (Springer, book chapter)", vol: "v.3, 1454–1463", 
    labels: ["book","cover"],
    extras: { note: "Selected for book cover page" },
    topic: ["nanoparticles","biomolecular"] },

  // ── 2011 ──
  { id: 32, year: 2011,
    title: "Interactions of cations with RNA loop-loop complexes",
    authors: "Abhishek Singh, L. Sethaphong, <strong>Yaroslava G. Yingling</strong>",
    journal: "Biophysical Journal", vol: "101, 727–735", doi: "10.1016/j.bpj.2011.06.033",
    labels: ["cover"],
    extras: { note: "Selected for journal cover page" },
    topic: ["dna-rna","biomolecular"] },

  { id: 31, year: 2011,
    title: "Theoretical perspective on properties of DNA-functionalized surfaces",
    authors: "Abhishek Singh, H. Eksiri, <strong>Yaroslava G. Yingling</strong>",
    journal: "Journal of Polymer Science B: Polymer Physics", vol: "49, 1563–1627", doi: "10.1002/polb.22349",
    labels: ["cover"],
    extras: { note: "Selected for journal cover page" },
    topic: ["dna-rna","polymer"] },

  { id: 30, year: 2011,
    title: "Simulations of stretching single stranded DNA",
    authors: "Abhishek Singh, <strong>Yaroslava G. Yingling</strong>",
    journal: "Mater. Res. Soc. Symp. Proc.", vol: "1303, mrsf10-1301-oo10-06", doi: "10.1557/opl.2011.569",
    labels: [], topic: ["dna-rna"] },

  // ── 2010 ──
  { id: 29, year: 2010,
    title: "Effect of Oligonucleotide Length on the Assembly of DNA Materials: Molecular Dynamics Simulations of Layer-by-Layer DNA Films",
    authors: "Abhishek Singh, S. Snyder, L. Lee, A. P. R. Johnston, F. Caruso, <strong>Yaroslava G. Yingling</strong>",
    journal: "Langmuir", vol: "26, 17339–17347", doi: "10.1021/la102762t",
    labels: ["press-release"],
    extras: { pressReleases: [{ label: "Press Release: Researchers Find 'Goldilocks' Of DNA Self-Assembly", url: "" }] },
    topic: ["dna-rna","nanoparticles"] },

  { id: 28, year: 2010,
    title: "The sequence of HIV-1 TAR RNA helix controls cationic distribution",
    authors: "Latsavongsakda Sethaphong, A. Singh, A. E. Marlowe, <strong>Yaroslava G. Yingling</strong>",
    journal: "Journal of Physical Chemistry C", vol: "114, 5506–5512", doi: "10.1021/jp906147q",
    labels: [], topic: ["dna-rna","biomolecular"] },

  // ── 2009 ──
  { id: 27, year: 2009,
    title: "Comparing ion distributions around RNA and DNA helical and loop-loop motifs",
    authors: "Andrii V. Semichaevsky, A. E. Marlowe, <strong>Yaroslava G. Yingling</strong>",
    journal: "Mater. Res. Soc. Symp. Proc.", vol: "1130, W05-05", doi: "10.1557/PROC1130W0505",
    labels: [], topic: ["dna-rna"] },

  { id: 26, year: 2009,
    title: "RNA molecular recognition and self-assembly into nanoparticles",
    authors: "Abhishek Singh, <strong>Yaroslava G. Yingling</strong>",
    journal: "Proc. International Institute of Informatics and Systemics", vol: "1, 6–7",
    labels: [], topic: ["dna-rna","nanoparticles"] },

  { id: 25, year: 2009,
    title: "Computational Elucidation of the self-assembly of nucleic acids into novel materials",
    authors: "Stacey Snyder, <strong>Yaroslava G. Yingling</strong>",
    journal: "Proc. International Institute of Informatics and Systemics", vol: "1, 8–9",
    labels: [], topic: ["dna-rna"] },

  // ── 2008 ──
  { id: 24, year: 2008,
    title: "The 3′ Proximal Translational Enhancer of Turnip Crinkle Virus Binds to 60S Ribosomal Subunits",
    authors: "V. A. Stupina, A. Meskauskas, J. C. Mccormack, <strong>Yaroslava G. Yingling</strong>, B. A. Shapiro, J. D. Dinman, A. E. Simon",
    journal: "RNA", vol: "14, 2379–2393", doi: "10.1261/rna.1227808",
    labels: [], topic: ["dna-rna","biomolecular"] },

  { id: 23, year: 2008,
    title: "Structural domains within the 3′ UTR of Turnip Crinkle Virus",
    authors: "J. C. McCormack, X. Yuan, <strong>Yaroslava G. Yingling</strong>, W. Kasprzak, R. E. Zamora, B. A. Shapiro, A. E. Simon",
    journal: "Journal of Virology", vol: "82, 8706–8720", doi: "10.1128/JVI.00416-08",
    labels: [], topic: ["dna-rna","biomolecular"] },

  { id: 22, year: 2008,
    title: "Protocols for the In silico Design of RNA Nanostructures",
    authors: "B. A. Shapiro, E. Bindewald, W. Kasprzak, <strong>Yaroslava G. Yingling</strong>",
    journal: "Nanostructure Design Methods and Protocols, Methods in Molecular Biology series, Vol. 474 (Humana Press, book chapter)", vol: "",
    labels: ["book"], topic: ["dna-rna"] },

  { id: 21, year: 2008,
    title: "RNAJunction: A Database of RNA Junctions and Kissing Loops for Three-Dimensional Structural Analysis and Nanodesign",
    authors: "E. Bindewald, R. Hayes, <strong>Yaroslava G. Yingling</strong>, W. Kasprzak, B. A. Shapiro",
    journal: "Nucleic Acids Research", vol: "36, D392–D397", doi: "10.1093/nar/gkm842",
    labels: [], topic: ["dna-rna","informatics"] },

  // ── 2007 ──
  { id: 20, year: 2007,
    title: "Computational design of an RNA hexagonal nano-ring and an RNA nanotube",
    authors: "<strong>Yaroslava G. Yingling</strong>, B. A. Shapiro",
    journal: "Nano Letters", vol: "7, 2328–2334", doi: "10.1021/nl070984r",
    labels: [], topic: ["dna-rna","nanoparticles"] },

  { id: 19, year: 2007,
    title: "Bridging the gap in RNA structure prediction",
    authors: "B. A. Shapiro, <strong>Yaroslava G. Yingling</strong>, W. Kasprzak, E. Bindewald",
    journal: "Current Opinion in Structural Biology", vol: "17, 157–165", doi: "10.1016/j.sbi.2007.03.001",
    labels: [], topic: ["dna-rna","informatics"] },

  { id: 18, year: 2007,
    title: "Computational Investigation into the Mechanisms of UV Ablation of Poly(methyl methacrylate)",
    authors: "M. Prasad, P. F. Conforti, B. J. Garrison, <strong>Yaroslava G. Yingling</strong>",
    journal: "Applied Surface Science", vol: "253, 6382–6385", doi: "10.1016/j.apsusc.2007.01.054",
    labels: [], topic: ["laser"] },

  { id: 17, year: 2007,
    title: "Incorporation of chemical reactions into UV photochemical ablation of coarse-grained material",
    authors: "<strong>Yaroslava G. Yingling</strong>, B. J. Garrison",
    journal: "Applied Surface Science", vol: "253, 6377–6381", doi: "10.1016/j.apsusc.2007.01.100",
    labels: [], topic: ["laser"] },

  { id: 16, year: 2007,
    title: "The Impact of Dyskeratosis Congenita Mutations on Structure and Dynamics of the Telomerase RNA Pseudoknot Domain",
    authors: "<strong>Yaroslava G. Yingling</strong>, B. A. Shapiro",
    journal: "Journal of Biomolecular Structure and Dynamics", vol: "24, 303–320", doi: "10.1080/07391102.2007.10531238",
    labels: ["cover"],
    extras: { note: "Selected for journal cover page" },
    topic: ["dna-rna","biomolecular"] },

  { id: 15, year: 2006,
    title: "The Prediction of the Wild-type Telomerase RNA Pseudoknot Structure and the Pivotal Role of a Bulge in its Formation",
    authors: "<strong>Yaroslava G. Yingling</strong>, B. A. Shapiro",
    journal: "Journal of Molecular Graphics and Modelling", vol: "25, 261–274",
    labels: [], topic: ["dna-rna","biomolecular"] },

  { id: 14, year: 2007,
    title: "Computational Studies of Ultraviolet Ablation of Poly(Methyl MethAcrylate)",
    authors: "P. F. Conforti, <strong>Yaroslava G. Yingling</strong>, B. J. Garrison",
    journal: "Journal of Physics: Conference Series", vol: "59, 322–327", doi: "10.1088/1742-6596/59/1/068",
    labels: [], topic: ["laser"] },

  { id: 13, year: 2006,
    title: "Structural and Dynamical Classification of RNA Single-Base Bulges for Nanostructure Design",
    authors: "W. A. Hastings, <strong>Yaroslava G. Yingling</strong>, G. S. Chirikjian, B. A. Shapiro",
    journal: "Journal of Computational and Theoretical Nanoscience", vol: "3, 63–77", doi: "10.1166/jctn.2006.005",
    labels: [], topic: ["dna-rna","nanoparticles"] },

  // ── 2005 ──
  { id: 12, year: 2005,
    title: "Dynamic Behavior of the Telomerase RNA Hairpin Structure and Its Relationship to Dyskeratosis Congenita",
    authors: "<strong>Yaroslava G. Yingling</strong>, B. A. Shapiro",
    journal: "Journal of Molecular Biology", vol: "348, 27–42", doi: "10.1016/j.jmb.2005.02.015",
    labels: [], topic: ["dna-rna","biomolecular"] },

  { id: 11, year: 2005,
    title: "Coarse-Grained Model of Interaction of Light with Polymeric Material: Onset of Ablation",
    authors: "<strong>Yaroslava G. Yingling</strong>, B. J. Garrison",
    journal: "Journal of Physical Chemistry B", vol: "109, 16482–16489", doi: "10.1021/jp0527711",
    labels: [], topic: ["laser","polymer"] },

  // ── 2004 ──
  { id: 10, year: 2004,
    title: "Theoretical Investigation of Laser Pulse Width Dependence in Thermal Confinement Regime",
    authors: "<strong>Yaroslava G. Yingling</strong>, P. F. Conforti, B. J. Garrison",
    journal: "Applied Physics A", vol: "79, 757–759", doi: "10.1007/s00339-004-2575-4",
    labels: [], topic: ["laser"] },

  { id: 9, year: 2004,
    title: "Coarse Grained Chemical Reaction Model",
    authors: "<strong>Yaroslava G. Yingling</strong>, B. J. Garrison",
    journal: "J. Physical Chemistry B (Feature Article)", vol: "108, 1815–1821", doi: "10.1021/jp035730i",
    labels: ["featured","invited"],
    extras: { note: "Feature Article" },
    topic: ["laser"] },

  // ── 2003 ──
  { id: 8, year: 2003,
    title: "Photochemical Ablation of Organic Solids",
    authors: "<strong>Yaroslava G. Yingling</strong>, B. J. Garrison",
    journal: "Nuclear Instruments and Methods in Physics Research B", vol: "203, 188–194", doi: "10.1016/S0168-583X(02)01855-4",
    labels: [], topic: ["laser"] },

  { id: 7, year: 2003,
    title: "MD Simulations of MALDesorption – Connections to Experiment",
    authors: "L. V. Zhigilei, <strong>Yaroslava G. Yingling</strong>, T. E. Itina, T. A. Schoolcraft, B. J. Garrison",
    journal: "Int. J. Mass Spectrometry", vol: "226, 85–106", doi: "10.1016/S1387-3806(02)00962-4",
    labels: [], topic: ["laser"] },

  { id: 6, year: 2003,
    title: "Computer Simulations of Laser Ablation of Molecular Substrates",
    authors: "L. V. Zhigilei, E. Leveugle, B. J. Garrison, <strong>Yaroslava G. Yingling</strong>, M. I. Zeifman",
    journal: "Chemical Reviews", vol: "103, 321–348", doi: "10.1021/cr010459r",
    labels: ["invited"], topic: ["laser"] },

  { id: 5, year: 2003,
    title: "Big Molecule Ejection – SIMS vs. MALDI",
    authors: "J. Garrison, A. Delcorte, L. V. Zhigilei, T. E. Itina, K. D. Krantzman, <strong>Yaroslava G. Yingling</strong>, C. M. McQuaw, E. J. Smiley, N. Winograd",
    journal: "Applied Surface Science", vol: "69–71, 203–204", doi: "10.1016/S0169-4332(02)00661-X",
    labels: [], topic: ["laser"] },

  // ── 2002 ──
  { id: 4, year: 2002,
    title: "Photochemical induced effects in material ejection in laser ablation",
    authors: "<strong>Yaroslava G. Yingling</strong>, B. J. Garrison",
    journal: "Chemical Physics Letters", vol: "364, 237–243", doi: "10.1016/S0009-2614(02)01327-1",
    labels: [], topic: ["laser"] },

  // ── 2001 ──
  { id: 3, year: 2001,
    title: "The Role of the Photochemical Fragmentation in Laser Ablation",
    authors: "<strong>Yaroslava G. Yingling</strong>, L. V. Zhigilei, B. J. Garrison",
    journal: "J. Photochemistry and Photobiology A: Chemistry", vol: "145, 173–181", doi: "10.1016/S1010-6030(01)00580-9",
    labels: [], topic: ["laser"] },

  { id: 2, year: 2001,
    title: "Photochemical Fragmentation Processes in Laser Ablation of Organic Solids",
    authors: "<strong>Yaroslava G. Yingling</strong>, L. V. Zhigilei, B. J. Garrison",
    journal: "Nuclear Instruments and Methods in Physics Research B", vol: "180, 171–175", doi: "10.1016/S0168-583X(01)00414-1",
    labels: [], topic: ["laser"] },

  { id: 1, year: 2001,
    title: "Laser Ablation of Bi-component Systems: A Probe of Molecular Ejection Mechanisms",
    authors: "<strong>Yaroslava G. Yingling</strong>, L. V. Zhigilei, B. J. Garrison, A. Koubenakis, J. Labrakis, S. Georgiou",
    journal: "Applied Physics Letters", vol: "78, 1631–1633", doi: "10.1063/1.1353816",
    labels: [], topic: ["laser"] }
];

/* ── LABEL CONFIG ─────────────────────────────────────────── */
const TOPIC_CONFIG = {
  'ai-ml':        { cls: 'topic-ai-ml',        text: 'AI / ML' },
  'nanoparticles':{ cls: 'topic-nanoparticles', text: 'Nanoparticles' },
  'cellulose':    { cls: 'topic-cellulose',     text: 'Cellulose' },
  'dna-rna':      { cls: 'topic-dna-rna',       text: 'DNA / RNA' },
  'polymer':      { cls: 'topic-polymer',       text: 'Polymer' },
  'biomolecular': { cls: 'topic-biomolecular',  text: 'Biomolecular' },
  'informatics':  { cls: 'topic-informatics',   text: 'Informatics' },
  'water':        { cls: 'topic-water',         text: 'Water' },
  'laser':        { cls: 'topic-laser',         text: 'Laser' }
};

const LABEL_CONFIG = {
  'cover':         { cls: 'label-cover',    text: 'Journal Cover' },
  'press-release': { cls: 'label-press',    text: 'Press Release' },
  'award':         { cls: 'label-award',    text: 'Award / Honor' },
  'featured':      { cls: 'label-featured', text: 'Featured' },
  'invited':       { cls: 'label-invited',  text: 'Invited' },
  'book':          { cls: 'label-book',     text: 'Book Chapter' }
};

/* ── STATE ────────────────────────────────────────────────── */
let state = {
  search: '',
  year: '',
  topic: '',
  label: '',
  view: 'list',
  extras: {}
};

/* ── MERGE saved extras into pub data ────────────────────── */
function getMergedExtras(pub) {
  const saved = state.extras[pub.id];
  const base = pub.extras || {};
  if (!saved) return base;
  return {
    coverImg: saved.coverImg || base.coverImg || '',
    coverCaption: saved.coverCaption || base.coverCaption || '',
    pressReleases: saved.pressReleases !== undefined ? saved.pressReleases : (base.pressReleases || []),
    note: saved.note !== undefined ? saved.note : (base.note || '')
  };
}

/* ── FILTER ───────────────────────────────────────────────── */
function getFiltered() {
  const q = state.search.toLowerCase().trim();
  return PUBLICATIONS.filter(p => {
    if (q && !p.title.toLowerCase().includes(q) &&
             !p.authors.toLowerCase().replace(/<[^>]+>/g,'').includes(q) &&
             !p.journal.toLowerCase().includes(q)) return false;
    if (state.year && p.year !== +state.year) return false;
    if (state.topic && !p.topic.includes(state.topic)) return false;
    if (state.label) {
      const allLabels = [...p.labels];
      const ex = getMergedExtras(p);
      if (ex.coverImg) allLabels.push('cover');
      if (ex.pressReleases && ex.pressReleases.length) allLabels.push('press-release');
      if (ex.note) allLabels.push('featured');
      if (!allLabels.includes(state.label)) return false;
    }
    return true;
  });
}

/* ── RENDER ───────────────────────────────────────────────── */
function renderLabel(key) {
  const cfg = LABEL_CONFIG[key];
  if (!cfg) return '';
  return `<span class="pub-label ${cfg.cls}">${cfg.text}</span>`;
}

function renderTopics(topics) {
  if (!topics || !topics.length) return '';
  const badges = topics.map(t => {
    const cfg = TOPIC_CONFIG[t];
    if (!cfg) return '';
    return `<span class="pub-topic ${cfg.cls}">${cfg.text}</span>`;
  }).join('');
  return badges ? `<div class="pub-topics">${badges}</div>` : '';
}

function renderPub(pub) {
  const ex = getMergedExtras(pub);
  const hasExtras = ex.coverImg || (ex.pressReleases && ex.pressReleases.length) || ex.note;

  // Build all labels (from data + extras)
  const allLabels = [...pub.labels];
  if (ex.coverImg && !allLabels.includes('cover')) allLabels.push('cover');
  if (ex.pressReleases && ex.pressReleases.length && !allLabels.includes('press-release')) allLabels.push('press-release');

  const labelsHtml = allLabels.map(renderLabel).join('');

  // DOI / URL link
  let doiHtml = '';
  if (pub.doi) {
    doiHtml = ` · <span class="pub-doi"><a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener">DOI: ${pub.doi}</a></span>`;
  } else if (pub.url) {
    doiHtml = ` · <span class="pub-doi"><a href="${pub.url}" target="_blank" rel="noopener">Link</a></span>`;
  }

  // Cover thumb
  const coverHtml = ex.coverImg
    ? `<img src="${ex.coverImg}" alt="${ex.coverCaption || 'Journal Cover'}" class="pub-cover-thumb" title="${ex.coverCaption || 'Journal Cover'}" />`
    : '';

  // Extras block
  let extrasHtml = '';
  if (ex.note) {
    extrasHtml += `<div class="pub-extra-item">${ex.note}</div>`;
  }
  if (ex.pressReleases && ex.pressReleases.length) {
    ex.pressReleases.forEach(pr => {
      if (pr.url) {
        extrasHtml += `<div class="pub-extra-item"><a href="${pr.url}" target="_blank" rel="noopener">${pr.label}</a></div>`;
      } else {
        extrasHtml += `<div class="pub-extra-item">${pr.label}</div>`;
      }
    });
  }

  const li = document.createElement('div');
  li.className = 'pub-item';
  li.dataset.id = pub.id;

  const topicsHtml = renderTopics(pub.topic);

  if (state.view === 'list') {
    li.innerHTML = `
      <div class="pub-num">${pub.id}</div>
      <div class="pub-body">
        ${labelsHtml || topicsHtml ? `<div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:4px">${labelsHtml ? `<div class="pub-labels" style="display:contents">${labelsHtml}</div>` : ''}${topicsHtml}</div>` : ''}
        <div class="pub-title-row" style="display:flex;gap:12px;align-items:flex-start">
          <div style="flex:1">
            <div class="pub-title">
              ${pub.doi ? `<a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener">${pub.title}</a>` : (pub.url ? `<a href="${pub.url}" target="_blank" rel="noopener">${pub.title}</a>` : pub.title)}
            </div>
            <div class="pub-authors">${pub.authors}</div>
            <div class="pub-meta">
              <span class="pub-journal">${pub.journal}</span>
              ${pub.vol ? ` ${pub.vol}` : ''}
              · <span class="pub-year">${pub.year}</span>${doiHtml}
            </div>
            ${extrasHtml ? `<div class="pub-extras">${extrasHtml}</div>` : ''}
          </div>
          ${coverHtml ? `<div class="pub-cover-col">${coverHtml}</div>` : ''}
        </div>
        <button class="pub-add-btn ${hasExtras ? 'has-extras' : ''}" data-pubid="${pub.id}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          ${hasExtras ? 'Edit extras (cover, press releases…)' : 'Add cover, press release, notes…'}
        </button>
      </div>`;
  } else {
    li.innerHTML = `
      <div class="pub-num">#${pub.id} · ${pub.year}</div>
      ${labelsHtml || topicsHtml ? `<div style="display:flex;flex-wrap:wrap;gap:5px;align-items:center">${labelsHtml ? `<div class="pub-labels" style="display:contents">${labelsHtml}</div>` : ''}${topicsHtml}</div>` : ''}
      <div class="pub-cover-row">
        ${coverHtml ? `<div>${coverHtml}</div>` : ''}
        <div class="pub-body">
          <div class="pub-title">
            ${pub.doi ? `<a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener">${pub.title}</a>` : (pub.url ? `<a href="${pub.url}" target="_blank" rel="noopener">${pub.title}</a>` : pub.title)}
          </div>
          <div class="pub-authors">${pub.authors}</div>
        </div>
      </div>
      <div class="pub-meta">
        <span class="pub-journal">${pub.journal}</span>
        ${pub.vol ? ` ${pub.vol}` : ''}${doiHtml}
      </div>
      ${extrasHtml ? `<div class="pub-extras">${extrasHtml}</div>` : ''}
      <button class="pub-add-btn ${hasExtras ? 'has-extras' : ''}" data-pubid="${pub.id}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        ${hasExtras ? 'Edit extras' : 'Add extras'}
      </button>`;
  }

  return li;
}

function render() {
  const list = document.getElementById('pubList');
  const empty = document.getElementById('pubEmpty');
  const countText = document.getElementById('pubCountText');
  const filtered = getFiltered();

  list.className = `pub-list ${state.view === 'cards' ? 'view-cards' : 'view-list'}`;
  list.innerHTML = '';

  if (filtered.length === 0) {
    list.style.display = 'none';
    empty.style.display = 'block';
    countText.textContent = 'No publications match';
    return;
  }

  list.style.display = '';
  empty.style.display = 'none';
  countText.textContent = filtered.length === PUBLICATIONS.length
    ? `Showing all ${PUBLICATIONS.length} publications`
    : `Showing ${filtered.length} of ${PUBLICATIONS.length} publications`;

  filtered.forEach(p => list.appendChild(renderPub(p)));
}

/* ── YEAR DROPDOWN ────────────────────────────────────────── */
function populateYears() {
  const sel = document.getElementById('filterYear');
  const years = [...new Set(PUBLICATIONS.map(p => p.year))].sort((a,b) => b - a);
  years.forEach(y => {
    const o = document.createElement('option');
    o.value = y; o.textContent = y;
    sel.appendChild(o);
  });
}

/* ── MODAL ────────────────────────────────────────────────── */
let modalPubId = null;
let modalPressReleases = [];

function openModal(pubId) {
  modalPubId = pubId;
  const pub = PUBLICATIONS.find(p => p.id === pubId);
  const ex = getMergedExtras(pub);
  modalPressReleases = JSON.parse(JSON.stringify(ex.pressReleases || []));

  document.getElementById('modalPubRef').textContent =
    `#${pub.id} — ${pub.title.replace(/<[^>]+>/g,'')} (${pub.year})`;
  document.getElementById('modalCoverImg').value = ex.coverImg || '';
  document.getElementById('modalCoverCaption').value = ex.coverCaption || '';
  document.getElementById('modalNote').value = ex.note || '';
  renderModalPressReleases();
  document.getElementById('pubModal').style.display = 'flex';
  document.getElementById('modalCoverImg').focus();
}

function closeModal() {
  document.getElementById('pubModal').style.display = 'none';
  modalPubId = null;
}

function renderModalPressReleases() {
  const container = document.getElementById('pressReleaseList');
  container.innerHTML = '';
  modalPressReleases.forEach((pr, i) => {
    const div = document.createElement('div');
    div.className = 'press-list-item';
    div.innerHTML = `
      <span title="${pr.label}">${pr.label}</span>
      ${pr.url ? `<a href="${pr.url}" target="_blank" rel="noopener">Link</a>` : ''}
      <button data-idx="${i}" title="Remove">×</button>`;
    div.querySelector('button').addEventListener('click', () => {
      modalPressReleases.splice(i, 1);
      renderModalPressReleases();
    });
    container.appendChild(div);
  });
}

function saveModal() {
  if (modalPubId === null) return;
  const saved = {
    coverImg: document.getElementById('modalCoverImg').value.trim(),
    coverCaption: document.getElementById('modalCoverCaption').value.trim(),
    pressReleases: modalPressReleases,
    note: document.getElementById('modalNote').value.trim()
  };
  state.extras[modalPubId] = saved;
  // extras saved in-memory
  closeModal();
  render();
}

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  populateYears();
  render();

  // Search — fire on both input and keyup for maximum compatibility
  const searchEl = document.getElementById('pubSearch');
  function doSearch() { state.search = searchEl.value; render(); }
  searchEl.addEventListener('input', doSearch);
  searchEl.addEventListener('keyup', doSearch);
  searchEl.addEventListener('change', doSearch);

  // Filters
  document.getElementById('filterYear').addEventListener('change', e => { state.year = e.target.value; render(); });
  document.getElementById('filterTopic').addEventListener('change', e => { state.topic = e.target.value; render(); });
  document.getElementById('filterLabel').addEventListener('change', e => { state.label = e.target.value; render(); });

  // Reset
  document.getElementById('pubResetBtn').addEventListener('click', () => {
    state.search = ''; state.year = ''; state.topic = ''; state.label = '';
    searchEl.value = '';
    document.getElementById('filterYear').value = '';
    document.getElementById('filterTopic').value = '';
    document.getElementById('filterLabel').value = '';
    render();
  });

  // View toggle
  document.getElementById('viewList').addEventListener('click', () => {
    state.view = 'list';
    document.getElementById('viewList').classList.add('active');
    document.getElementById('viewCard').classList.remove('active');
    render();
  });
  document.getElementById('viewCard').addEventListener('click', () => {
    state.view = 'cards';
    document.getElementById('viewCard').classList.add('active');
    document.getElementById('viewList').classList.remove('active');
    render();
  });

  // Open modal on add-btn click (delegated)
  document.getElementById('pubList').addEventListener('click', e => {
    const btn = e.target.closest('.pub-add-btn');
    if (btn) openModal(+btn.dataset.pubid);
  });

  // Modal events
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalCancel').addEventListener('click', closeModal);
  document.getElementById('modalBackdrop').addEventListener('click', closeModal);
  document.getElementById('modalSave').addEventListener('click', saveModal);

  // Add press release
  document.getElementById('addPressBtn').addEventListener('click', () => {
    const label = document.getElementById('newPressLabel').value.trim();
    const url = document.getElementById('newPressUrl').value.trim();
    if (!label) return;
    modalPressReleases.push({ label, url });
    document.getElementById('newPressLabel').value = '';
    document.getElementById('newPressUrl').value = '';
    renderModalPressReleases();
  });

  // Enter key in press-add inputs
  document.getElementById('newPressLabel').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('addPressBtn').click();
  });
  document.getElementById('newPressUrl').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('addPressBtn').click();
  });

  // ESC closes modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.getElementById('pubModal').style.display !== 'none') closeModal();
  });
});
