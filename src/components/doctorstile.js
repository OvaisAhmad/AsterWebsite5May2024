import Link from "next/link";
import FeaturedImage from "./FeaturedImage";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const DoctorsTile = ({ filterddoctors }) => {
  const { t } = useTranslation("");
  const router = useRouter();
  const locale = router.locale;
  return (
    <div className="topbar_wrapper" style={{ padding:17 }}>
      
  <div className="doctors_container" style={{  justifyContent: "center" }}>
        {
          filterddoctors.map((post) => (
            post.doctorFields.doctorName && (
            <div key={post.slug} className="droctors_block rounded-2xl bg-white box-border w-[50%] flex flex-col p-[20px] items-start justify-start border-[1px] border-solid border-blue-light sm:self-stretch sm:w-auto sm:px-2.5 sm:pb-[10px] sm:box-border">
              <Link href={`/appointment/${(post.slug)}`} className="w-[100%]">
              <div className="dr_contaner_md self-stretch flex flex-row items-start justify-start gap-[19px] sm:flex-col">
                <div className="dr_width100_md self-stretch flex-1 flex flex-row items-center justify-center w-[40%] sm:w-full sm:flex-[unset] sm:ps-0 sm:pe-0 sm:box-border sm:self-stretch">
                  <FeaturedImage post={post} />
                </div>
                <div className="w-[100%] flex-1 h-[250px] flex flex-col items-start justify-start gap-[12px] sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex flex-col items-start justify-start font-work-sans">
                    <div className="items-start justify-start sm:mt-5" style={{ fontSize: 20 }}>
                      <div className="relative font-semibold inline-block w-[100%] h-[31px] shrink-0">
                        {locale === 'ar' && post.doctorFields.doctorNameAr !== null
                          ? post.doctorFields.doctorNameAr
                          : post.doctorFields.doctorName}
                      </div>
                      <div className="sitefont relative text-lg leading-[149%] 
                      text-gray-400 flex items-center w-[304px] h-[auto] shrink-0"  style={{ fontSize: 16 }}>
                        {locale === 'ar' && post.doctorFields.designationAr !== null
                          ? post.doctorFields.designationAr
                          : post.doctorFields.designation}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative box-border h-[3px] border-t-[1px]
                   border-solid border-blue-light" style={{ width:"77%",maxWidth:"100%" }} />
                  <div className="doctorcontentwrapper">
                    <div className="font_14 self-stretch flex flex-row items-start justify-start 
                    gap-[10px] text-base text-gray-400" style={{ height: 140 }}>
                      <div className="relative leading-[160%] uppercase font-medium">
                        <p className="m-0">{t("doctor.Speciality")}</p>
                        <p className="m-0">{t("doctor.Nationality")}</p>
                        <p className="m-0">{t("doctor.Languages")}</p>
                      </div>
                      <div className="relative leading-[160%] capitalize font-medium inline-block w-[5px] h-[auto] shrink-0">
                        <p className="m-0">:</p>
                        <p className="m-0">:</p>
                        <p className="m-0">:</p>
                      </div>
                      <div className="relative leading-[160%] capitalize font-medium inline-block w-[207px] h-[auto] shrink-0"
                        style={{ minHeight: 150 }}>
                        <p className="m-0">{locale === 'ar' && post.doctorFields.specializationAr !== null
                          ? post.doctorFields.specializationAr
                          : post.doctorFields.specialization}</p>
                        <p className="m-0">{locale === 'ar' && post.doctorFields.nationalityAr !== null
                          ? post.doctorFields.nationalityAr
                          : post.doctorFields.nationality}</p>
                        <p className="m-0">{locale === 'ar' && post.doctorFields.languagesAr !== null
                          ? post.doctorFields.languagesAr
                          : post.doctorFields.languages}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
              <div className="self-stretch relative box-border h-[3px] border-t-[3px] border-solid border-lavender"
                style={{ borderTop: "1px solid #D7E9FF", marginBottom:10}} />
              
              <div className="dr_strech_100_md self-stretch flex-1 flex flex-row items-end justify-center gap-[30px] text-center text-lg text-white">
                    <div className=" w-[100] w-[50%] sm:w-[90%] rounded-31xl bg-aster-green h-[50px] flex flex-row py-2.5 px-5 box-border items-center justify-center"
                      style={{borderRadius: 30, fontSize: 16 }}>
                      <b className="relative w-[100]"><Link href="#" >{t("doctor.Book an Appointment")}</Link></b>
                    </div>
                  </div>
            </div>
            )
          ))}


      </div>
    </div>
  );
};

export default DoctorsTile;
