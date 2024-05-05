import { useTranslation } from "next-i18next";
import Link from "next/link";

const Specialisations = () => {
  const { t } = useTranslation("");
  return (
    <div className="treatyouwellcontainer relative bg-whitesmoke w-full flex flex-col box-border items-center justify-center gap-[80px] text-start text-37xl text-aster-blue font-paragraph-01 lg:ps-8 lg:pe-8 lg:box-border md:ps-8 md:pe-8 md:box-border sm:flex-col sm:gap-[40px] sm:items-start sm:justify-center sm:ps-4 sm:pe-4 sm:box-border">
      <div className="topbar_wrapper w-full">
        <div className="self-stretch flex flex-row items-center justify-center
         gap-[130px] lg:flex-row md:flex-col md:gap-[80px] sm:self-stretch
          sm:w-auto sm:gap-[40px] sm:items-start sm:justify-center
           sm:ps-0 sm:pe-0 sm:box-border" style={{ marginTop:50 }}>
          <div className=" w-[100%] items-start justify-start gap-[30px]">

            <h3 style={{
              boxSizing: "border-box",
              textTransform: "inherit",
              textAlign: "inherit",
              fontStyle: "inherit",
              margin: "0px",
              fontSize: "inherit",
              lineHeight: "inherit",
              fontWeight: "inherit",
              color: "inherit",
              fontFamily: "inherit",
              marginTop: "0px",
              marginBottom: "0px",
              letterSpacing: "inherit",
              fontSize: "27px",
              fontWeight: "500",
              color: "#144d92",
              textAlign: "center",
              width: "100%",
              marginBottom:40,
            }}
            >
              {t("hero.Our Specialisations")}
            </h3>

            <div className="network_desc relative text-3xl leading-[132%] 
          text-grey lg:w-[100%] md:self-stretch md:w-auto" style={{ width: "100%",textAlign:"center" }}>
              {t("hero.Specialisations Description")}</div>
          </div>

        </div>
        <div className="w-full self-stretch flex flex-row py-0 items-center justify-center text-5xl text-gray-100 font-poppins lg:gap-[20px] md:items-start md:justify-center md:ps-0 md:pe-0 md:box-border sm:items-start sm:justify-center sm:ps-0 sm:pe-0 sm:box-border">
          <div className="spec_container flex flex-row py-[50px] box-border items-center justify-center gap-[29px] sm:ps-0 sm:pe-0 sm:box-border">
            <div className="rounded-xl w-full bg-white w-[312px] h-[420px] flex flex-col p-[15px] box-border items-center justify-start gap-[15px]">
              <img
                className="border_radius_5 self-stretch relative max-w-full overflow-hidden h-[281px] shrink-0 object-cover"
                alt=""
                src="/specialities_03.jpg"
              />
              <div className="sitefont font_size_20 self-stretch flex-1 relative leading-[35.5px] font-medium">
                {t("speciality.Anaesthesiology")}
              </div>
            </div>
            <div className="rounded-xl w-full  bg-white w-[311px] h-[420px] flex flex-col p-[15px] box-border items-center justify-start gap-[15px]">
              <img
                className="border_radius_5 self-stretch relative max-w-full overflow-hidden h-[281px] shrink-0 object-cover"
                alt=""
                src="/specialities_01.jpg"
              />
              <div className="sitefont font_size_20 self-stretch flex-1 relative leading-[35.5px] font-medium">
                {t("speciality.Cardiology")}
              </div>
            </div>
            <div className="rounded-xl w-full  bg-white w-[312px] h-[420px] flex flex-col p-[15px] box-border items-center justify-start gap-[15px]">
              <img
                className="border_radius_5 self-stretch relative max-w-full overflow-hidden h-[281px] shrink-0 object-cover"
                alt=""
                src="/specialities_02.jpg"
              />
              <div className="sitefont font_size_20 self-stretch flex-1 relative leading-[35.5px] font-medium">
                {t("speciality.Dermatology")}
              </div>
            </div>
            <div className="rounded-xl w-full  bg-white w-[311px] h-[420px] flex flex-col p-[15px] box-border items-center justify-start gap-[15px]">
              <img
                className="border_radius_5 self-stretch relative max-w-full overflow-hidden h-[281px] shrink-0 object-cover"
                alt=""
                src="/specialities_01.jpg"
              />
              <div className="sitefont font_size_20 self-stretch flex-1 relative leading-[35.5px] font-medium">
                {t("speciality.ENT")}
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 50 }}>
          <div className="button_control" style={{ margin: "0px auto" }}>
            <Link href="/specialities">
              <b className="flex-1 relative leading-[64px]">{t("hero.View all Departments")}</b></Link>
          </div>
        </div>


      </div>

    </div>

  );
};

export default Specialisations;
