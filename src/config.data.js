import logo1 from "./images/arrivae.svg";
import logo2 from "./images/jobs.svg";
import logo3 from "./images/bizom.svg";
import logo4 from "./images/phable.svg";
import logo5 from "./images/safex.svg";
import test1 from "./images/i1.png";
import test2 from "./images/i2.png";
import test3 from "./images/i3.png";
import feature1 from "./images/animation-feature-1.gif";
import feature2 from "./images/animation-feature-2.gif";
import feature3 from "./images/animation-feature-3.gif";
import feature4 from "./images/animation-feature-4.gif";
import icon1 from "./images/Vector.svg";
import icon2 from "./images/Vector-1.svg";
import icon3 from "./images/Vector-2.svg";
import icon4 from "./images/Vector-3.svg";
import icon5 from "./images/Vector-4.svg";
import icon6 from "./images/Vector-5.svg";

const Landing = {
  mobile: {
    title1: "Create high performance",
    title2: "culture with OKRs",
    description:
      "Use Fleo to make goals effective and gets teams focused on company growth",
  },
  desktop: {
    title1: "Create High Performance",
    title2: "Culture for Distributed teams",
    description:
      "Use Fleo to manage OKRs, KRAs or KPIs, and enable high performance with continuous feedback.",
  },
};

const BrandsSection = [logo1, logo2, logo3, logo4, logo5];

const PlanningSection = {
  title1: "Plan Better. Do Better.",
  title2: "Do Better.",
  mobileTextList: [
    {
      title: "Spend sometime planning the success map",
    },
  ],
  pcTextList: [
    {
      title: "Manage Strategy Execution",
      description:
        "Breakdown your strategy into smaller objectives and measure the success with key results & KPIs.",
    },
    {
      title: "Align your Projects with Objectives",
      description:
        "Create initiatives and tasks in line with the goals made. Capture value of every effort undertaken.",
    },
    {
      title: "Feedback to keep things on track",
      description:
        "Shorter feedback cycles ensure that the team never goes off track.",
    },
  ],
};

const TestimonialSection = {
  title: "Our Customers Love us",
  list: [
    {
      image: test1,
      name: "Deepu Nagaraj",
      position: "Senior HR Lead | PhableCare",
      title: "Improves Work Environment Quality",
      description:
        "Fleo is the most responsive and flexible PMS currently. For over 800 employees & 100+ configurations, we implemented it all within 3 weeks.",
      descriptionHighlighted:
        "All I care about is creating the best working environment, & Fleo helps me do that.",
    },
    {
      image: test2,
      name: "Lalit Bhise",
      position: "CEO | Bizom",
      title: "Makes for Effective Leadership",
      description:
        "Fleo got our rapidly expanding team in sync. My 90 min weekly review is down to 30 mins. I am aware of every bit of progress and bottleneck.",
      descriptionHighlighted:
        "Thanks to Fleo, our Vision, Goals & Efforts are completely aligned.",
    },
    {
      image: test3,
      name: "Aamith Menon",
      position: "Senior HR Lead | PhableCare",
      title: "Improves Work Environment Quality",
      description:
        "Fleo is the most responsive and flexible PMS currently. For over 800 employees & 100+ configurations, we implemented it all within 3 weeks.",
      descriptionHighlighted:
        "All I care about is creating the best working environment, & Fleo helps me do that.",
    },
  ],
};

const InformationSection = {
  title: "Know the performance pulse to take better decisions",
  description:
    "Fleo shows you the areas that need your attention and winners who should be appreciated",
  list: [
    {
      top: 0,
      scale: 0.94,
      image: feature1,
      title: "Take faster and impactful decision using Fleo",
      description:
        "Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.",
    },
    {
      top: 20,
      scale: 0.96,
      image: feature2,
      title: "Conduct regular internal business reviews with ease",
      description:
        "Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.",
    },
    {
      top: 40,
      scale: 0.98,
      image: feature3,
      title: "Take faster and impactful decision using Fleo",
      description:
        "Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.",
    },
    {
      top: 60,
      scale: 1,
      image: feature4,
      title: "Check your bandwitdh and make every second count",
      description:
        "Fleo  shows you the areas that need your attention, it will be your go- to tool for internal business reviews.",
    },
  ],
};

const IntegrationSection = {
  title: "Fleo sits in your product ecosystem",
  description: "Link different data sources with seamless integration",
};

const TrialSection = {
  title: "Book Your Demo Now",
  list1: [
    {
      title: "Bussiness Reviews",
      description:
        "Set review cycles, conduct  internal reviews, 360 degree and one on ones.",
      icon: icon1,
    },
    {
      title: "Task Managment",
      description:
        "Create daily task list, Manage projects aligned with goals. See planned vs unplanned work",
      icon: icon2,
    },
    {
      title: "Initiatives",
      description:
        "Design projects & initiatives in line with the objectives. This way you never lose track of what matters most.",
      icon: icon3,
    },
  ],
  list2: [
    {
      title: "KPI",
      description:
        "Track all your metrics on single dasboard. Combine KPIs to create one north metric.",
      icon: icon4,
    },
    {
      title: "Workload Dashboard",
      description:
        "Eliminate imbalanced work distribution by checking team???s bandwidth report.",
      icon: icon5,
    },
    {
      title: "Goal Managment",
      description:
        "Break your strategy into small goals (OKRs) and focus only on the right things.",
      icon: icon6,
    },
  ],
};

export {
  Landing,
  BrandsSection,
  PlanningSection,
  TestimonialSection,
  InformationSection,
  IntegrationSection,
  TrialSection,
};
