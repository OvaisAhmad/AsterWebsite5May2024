import Link from "next/link";
import { useTranslation } from "next-i18next";

const DoctorProfile = ({ postData }) => {
  const { t } = useTranslation("");
  return (

    <div className="sitefont w-[100%]">
      <div className="mt-[50px]">
        <div className="dr_page_banner">
          <div className="dr_page_title dr_page_container">{t("doctor.Our Doctors")}</div>
        </div>
      </div>
      <div
        className="breadcrumbs  dr_page_container"
        style={{
          boxSizing: "border-box",
          position: "relative",
          paddingTop: 50,
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            margin: "0px auto",
            display: "block",
            width: "100%",
            maxWidth: "1240px",
            padding: "0px",
            paddingRight: "0px",
            paddingLeft: "0px",
          }}
        >
          <nav
            aria-label="breadcrumb"
            style={{ boxSizing: "border-box", display: "block" }}
          >
            <ul
              style={{
                boxSizing: "border-box",
                listStyle: "none",
                margin: "0px",
                padding: "0px",
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "0px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <li
                className="breadcrumbs__item : breadcrumbs__item--home"
                style={{
                  boxSizing: "border-box",
                  display: "inline-flex",
                  alignItems: "center",
                  position: "relative",
                  paddingLeft: "0px",
                  paddingRight: "5px",
                }}
              >
                <Link
                  className="breadcrumbs__link : text--14"
                  href="/"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    transition:
                      "color 0.3s ease 0s, border 0.3s ease 0s",
                    whiteSpace: "nowrap",
                    display: "block",
                    color: "rgb(20, 77, 146)",
                    letterSpacing: "0.7px",
                    textTransform: "uppercase",
                    fontSize: "0px",
                    lineHeight: 0,
                  }}
                >
                  <img src="/home.svg" alt="Instagram Icon" width="17" height="17"
                  />
                </Link>
              </li>
              <li
                className="breadcrumbs__item"
                style={{
                  boxSizing: "border-box",
                  display: "inline-flex",
                  alignItems: "center",
                  position: "relative",
                  fontWeight: 700,
                }}
              >
                <Link
                  className="breadcrumbs__link : text--14"
                  href="/appointment"
                  target="_self"
                  title="All about Appointments"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    transition:
                      "color 0.3s ease 0s, border 0.3s ease 0s",
                    fontSize: "14px",
                    lineHeight: 1.4,
                    whiteSpace: "nowrap",
                    display: "block",
                    color: "rgb(20, 77, 146)",
                    letterSpacing: "0.7px",
                    textTransform: "uppercase",
                  }}
                >
                  {" / "}
                  {t("doctor.Our Doctors")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="dr_page_container doctprof_container relative w-full
       flex flex-row items-start justify-center 
       box-border gap-[50px] text-start text-5xl text-aster-blue
        font-heading-04 lg:items-start lg:justify-start lg:ps-8
         lg:pr-8 lg:box-border md:w-auto md:[align-self:unset]
          md:ps-8 md:pr-8 md:box-border sm:flex-col sm:items-center
           sm:justify-center sm:ps-4 sm:pr-4 sm:box-border" style={{ paddingTop: 50 }}>
        <div className="doctprof_image flex flex-col items-start justify-start gap-[50px] sm:self-stretch sm:w-auto">
          <div className="doctprof_heading_md flex flex-col items-start justify-start text-25xl font-paragraph-01 sm:self-stretch sm:w-auto">
            {postData.doctorName && (
              <div className="flex flex-col items-start justify-start gap-[5px] sm:self-stretch sm:w-auto sm:h-auto">
                <b className="relative sm:self-stretch sm:w-auto sm:flex-1">
                  {postData.doctorName}
                </b>
                {postData.designation && (
                  <div className="relative text-3xl leading-[132%]
                   font-medium text-paragraph-text flex items-center">
                    {postData.designation}
                  </div>
                )}
              </div>
            )}
            <div className="relative box-border h-0.5 border-t-[2px] border-solid border-aster-green" />
          </div>
          {postData.featuredImage && (
            <div className="drprofilecontainer self-stretch sm:h-[250px] sm:rounded-3xl sm:p-2.5 sm:box-border" 
            >
              <img style={{ borderRadius: 10, border: "1px solid #86f2dd", padding: 5,width:250,height:350 }}
                className="flex-1 relative rounded-xl max-w-full 
                overflow-hidden h-[488px] object-cover sm:self-stretch sm:h-auto"
                alt=""
                src={postData.featuredImage.node.sourceUrl}
              />
            </div>
          )}
          <div className="doctprof_leftitem self-stretch flex flex-col items-start justify-start gap-[40px] sm:self-stretch sm:w-auto">
            {postData.languages && (
              <div className="doctprof_leftitemblock self-stretch rounded-xl bg-light-grey flex
               flex-col items-start justify-start gap-[10px]" style={{ paddingTop: 30 }}>
                <div className="relative font-semibold" style={{ fontSize: 16 }}>{t("doctor.LANGUAGES")}</div>
                <div style={{ fontSize: 14 }} className="self-stretch relative text-3xl leading-[132%] font-medium font-paragraph-01 text-paragraph-text">
                  {postData.languages}
                </div>
              </div>
            )}
            {postData.education && (
              <div className="doctprof_leftitemblock self-stretch rounded-xl
               bg-light-grey flex flex-col items-start justify-start gap-[10px]"  style={{ paddingTop: 30 }}>
                <div className="relative font-semibold" style={{ fontSize: 16 }}>{t("doctor.EDUCATION")}</div>
                <div style={{ fontSize: 14 }} className="self-stretch relative text-3xl leading-[132%] font-medium font-paragraph-01 text-paragraph-text">
                  {postData.education}
                </div>
              </div>
            )}
            {postData.specialization && (
              <div className="doctprof_leftitemblock self-stretch rounded-xl bg-light-grey
               flex flex-col items-start justify-start gap-[10px]" style={{ paddingTop: 30 }}>
                <div className="relative font-semibold" style={{ fontSize: 16 }}>{t("doctor.SPECIALIZATION")}</div>
                <div style={{ fontSize: 14 }} className="self-stretch relative text-3xl leading-[132%] font-medium font-paragraph-01 text-paragraph-text">
                  {postData.specialization}
                </div>
              </div>
            )}
            {postData.associations && (
              <div className="doctprof_leftitemblock self-stretch rounded-xl bg-light-grey
               flex flex-col items-start justify-start gap-[10px]" style={{ paddingTop: 30 }}>
                <div className="relative font-semibold" style={{ fontSize: 16 }}>{t("doctor.ASSOCIATIONS")}</div>
                <div style={{ fontSize: 14 }} className="self-stretch relative text-3xl leading-[132%] font-medium font-paragraph-01 text-paragraph-text">
                  {postData.associations}
                </div>
              </div>
            )}
            {postData.nationality && (
              <div className="doctprof_leftitemblock self-stretch rounded-xl
               bg-light-grey flex flex-col items-start justify-start gap-[10px]" style={{ paddingTop: 30 }}>
                <div className="relative font-semibold" style={{ fontSize: 16 }}>{t("doctor.NATIONALITY")}</div>
                <div style={{ fontSize: 14 }} className="self-stretch relative text-3xl leading-[132%] font-medium font-paragraph-01 text-paragraph-text">
                  {postData.nationality}
                </div>
              </div>
            )}
            {postData.licenses && (
              <div className="doctprof_leftitemblock self-stretch rounded-xl
               bg-light-grey flex flex-col items-start justify-start gap-[10px]" style={{ paddingTop: 30 }}>
                <div className="relative font-semibold" style={{ fontSize: 16 }}>{t("doctor.LICENSE GRADE")}</div>
                <div style={{ fontSize: 14 }} className="self-stretch relative text-3xl leading-[132%] font-medium font-paragraph-01 text-paragraph-text">
                  {postData.licenses}
                </div>
              </div>
            )}
            {postData.typeOfPhysician && (
              <div className="doctprof_leftitemblock self-stretch rounded-xl 
              bg-light-grey flex flex-col items-start justify-start gap-[10px]" style={{ paddingTop: 30 }}>
                <div className="relative font-semibold" style={{ fontSize: 16 }}>{t("doctor.TYPE OF PHYSICIAN")}</div>
                <div style={{ fontSize: 14 }} className="self-stretch relative text-3xl leading-[132%] font-medium font-paragraph-01 text-paragraph-text">
                  {postData.typeOfPhysician}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="doctprof_content flex-1 flex flex-col items-start justify-start gap-[20px] sm:flex-[unset] sm:self-stretch">
          <div className="doctprof_heading_lg flex flex-col items-start justify-start text-25xl font-paragraph-01 sm:self-stretch sm:w-auto">
            {postData.doctorName && (
              <div className="flex flex-col items-start justify-start gap-[5px] sm:self-stretch sm:w-auto sm:h-auto">
                <b className="relative sm:self-stretch sm:w-auto sm:flex-1" style={{ fontSize: 20 }}>
                  {postData.doctorName}
                </b>
                {postData.designation && (
                  <div className="relative text-3xl leading-[132%] font-medium 
                  text-paragraph-text flex items-center"  style={{ fontSize: 17 }}
                  >
                    {postData.designation}
                  </div>
                )}
              </div>
            )}
            <div className="relative box-border h-0.5 border-t-[2px] border-solid border-aster-green" />

          </div>
          <div className="w-[100%]" style={{ borderTop: "2px solid #D7E9FF" }}></div>
          {postData.experience && (
            <div className="self-stretch rounded-lg flex flex-col items-start justify-start gap-[30px] sm:self-stretch sm:w-auto">
              <div className="self-stretch relative font-semibold" style={{ fontSize : 18}}>
                {t("doctor.PROFESSIONAL EXPERIENCE")}
              </div>
              <div className="self-stretch relative text-3xl leading-[132%] 
              font-medium font-paragraph-01 text-paragraph-text"  style={{ fontSize : 16}}>
                <ul
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    letterSpacing: "0.4px",
                  }}
                >
                  {postData.experience.split('\n').map((item, index) => (
                    <li key={index}
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        paddingLeft: "22px",
                        listStyleType: "disc",
                        color: "#03A885",
                        fontSize: 14,
                      }}>
                      <div style={{
                        color: "black"
                      }}>
                        {item.trim()}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {postData.expertise && (
            <div className="self-stretch rounded-lg flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch relative font-semibold" style={{ fontSize: 16 }}>
                {t("doctor.CLINICAL EXPERTISE & SERVICES OFFERED")}
              </div>
              <div className="self-stretch relative text-3xl leading-[132%] 
              font-medium font-paragraph-01 text-paragraph-text">
                <ul
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    letterSpacing: "0.4px",
                  }}
                >
                  {postData.expertise.split('\n').map((item, index) => (
                    <li key={index}
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        paddingLeft: "22px",
                        listStyleType: "disc",
                        color: "#03A885",
                        fontSize: 14,
                      }}>
                      <div style={{
                        color: "black"
                      }}>
                        {item.trim()}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {postData.procedures && (
            <div className="self-stretch rounded-lg flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch relative font-semibold" style={{ fontSize: 16 }}>{t("doctor.PROCEDURES")}</div>
              <div className="self-stretch relative text-3xl leading-[132%] font-medium font-paragraph-01 text-paragraph-text">
                <ul
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    letterSpacing: "0.4px",
                  }}
                >
                  {postData.procedures.split('\n').map((item, index) => (
                    <li key={index}
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        paddingLeft: "22px",
                        listStyleType: "disc",
                        color: "#03A885",
                        fontSize: 14,
                      }}>
                      <div style={{
                        color: "black"
                      }}>
                        {item.trim()}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        
      </div>
      <div style={{marginBottom:50,width: "100%",marginTop:50 }}>
          <div className="button_control" style={{ margin: "0px auto" }}>

              <b className="flex-1 relative leading-[64px]">{t("doctor.Book an Appointment")}</b>

          </div>
        </div>
    </div>
  );
};

export default DoctorProfile;
