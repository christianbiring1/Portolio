import { useTranslation } from "react-i18next";
import PropsTypes from "prop-types";

import { IoLocationSharp } from "react-icons/io5";
import translationEng from '../languages/en/translation.json';

const Experience = (props) => {
  const { active } = props;
  const { t } = useTranslation();

  const exp = [
    {
      id: 1,
      url: 'https://co-nnect.cc/',
      company: 'Co:nnect',
      location: translationEng.expLocation1,
      position: translationEng.expPosition1,
      period: translationEng.expPeriod1,
      description: translationEng.expDescription1,
      stacks: ['Nextjs', 'TypeScript', 'Shadcn.ui', 'Tailwind'],
    },
    {
      id: 2,
      url: 'https://lunahealth.co/',
      company: 'Luna',
      location: translationEng.expLocation2,
      position: translationEng.expPosition2,
      period: translationEng.expPeriod2,
      description: translationEng.expDescription2,
      stacks: ['React', 'Nodejs', 'Express', 'Firebase', 'PHP','jQuery', 'cPanel'],
    },
    {
      id: 3,
      url: 'https://www.linkedin.com/company/thinchealth/',
      company: 'ThincHealth',
      location: translationEng.expLocation3,
      position: translationEng.expPosition3,
      period: translationEng.expPeriod3,
      description: translationEng.expDescription3,
      stacks: ['ReactJs','NextJs', 'React Native', 'SEO', 'Google Search Console'],
    },
    {
      id: 4,
      url: 'https://www.microverse.org',
      company: 'Microverse',
      location: translationEng.expLocation4,
      position: translationEng.expPosition4,
      period: translationEng.expPeriod4,
      description: translationEng.expDescription4,
      stacks: ['Git', 'GitHub', 'HTML5','CSS3', 'SCSS', 'Bootstrap','JavaScript', 'React', 'Ruby', 'Ruby on rails', 'PostgreSQL'],
    },
    {
      id: 5,
      url: 'https://www.microverse.org',
      company: 'Microverse',
      location: translationEng.expLocation5,
      position: translationEng.expPosition5,
      period: translationEng.expPeriod5,
      description: translationEng.expDescription5,
      stacks: ['HTML5','CSS3', 'JavaScript', 'React', 'Git', 'Github']
    }
  ];

  const styles = active ? {color: "#fff"} : {};

  return (
    <>
      {exp.map(item => (
        <a href={item.url} target="_blank" className="company experience" key={item.id} rel="noreferrer">
          <div className="period">
            <span className="date" style={styles}>{t(`expPeriod${item.id}`)}</span>
            <span style={styles}>
              <IoLocationSharp />
              {t(`expLocation${item.id}`)}
            </span>
          </div>
          <div className="work__details" >
            <div className="title">
              <h4 className="" style={styles}>
                <span className="position" style={styles}>{t(`expPosition${item.id}`)}</span>
                <span>.</span>
                <span className="company_name">{item.company}</span>
                <span className="arrow">--{">"}</span>
              </h4>
            </div>
            <div className="description">
              {t(`expDescription${item.id}`)}
            </div>
            <div className="stack_list">
              {item.stacks.map(stack => (
                  <span className="stack_name"key={stack} style={styles}>{stack}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

Experience.propTypes = {
  active: PropsTypes.bool.isRequired
}
 
export default Experience;