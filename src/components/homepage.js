const HomePage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start text-start text-9xl text-white font-heading-01 lg:ps-0 lg:box-border md:ps-8 md:pe-0.5 md:box-border sm:items-start sm:justify-center sm:ps-4 sm:pe-4 sm:box-border">
      <div className="home_banner_bg_color w-[2150px] h-[900px] flex flex-col py-0 px-5 box-border items-center justify-center bg-[url('/row@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col pt-[120px] pb-5 items-center justify-center gap-[120px]">
          <div className="w-full flex flex-col items-start justify-center gap-[40px] max-w-[1340px]">
            <div className="flex flex-col items-start justify-center gap-[10px]">
              <b className="relative tracking-[1px] leading-[16px] capitalize flex items-center h-[26px] shrink-0">
                Aster Royal Hospital
              </b>
              <b className="w-full relative text-56xl leading-[80px] inline-block max-w-[768px]">
                The latest addition to the aster family
              </b>
            </div>
            <div className="rounded-xl box-border w-[306px] h-16 flex flex-row py-0 px-5 items-center justify-center text-center text-2xl font-poppins border-[3px] border-solid border-white">
              <b className="flex-1 relative leading-[64px]">View Packages</b>
            </div>
          </div>
          <div className="w-full flex flex-row flex-wrap items-start justify-start max-w-[1340px] text-center">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-full rounded-t-xl rounded-b-none bg-aster-blue h-[63px] flex flex-col p-2.5 box-border items-center justify-center relative max-w-[1340px]">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_30.5px)] left-[calc(50%_-_178px)] leading-[61px] font-semibold z-[0]">
                  How can we help you today?
                </div>
              </div>
              <div className="self-stretch rounded-t-none rounded-b-xl bg-aster-green flex flex-row flex-wrap py-[50px] px-[100px] items-center justify-between text-lg font-work-sans">
                <div className="w-[200px] flex flex-col items-center justify-start gap-[15px]">
                  <div className="flex flex-row items-center justify-center">
                    <div className="overflow-hidden flex flex-row items-center justify-center">
                      <img
                        className="relative w-11 h-11"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative font-semibold">
                    Book an Apoointment
                  </div>
                </div>
                <div className="w-[200px] flex flex-col items-center justify-start gap-[15px]">
                  <div className="flex flex-row items-center justify-center">
                    <div className="overflow-hidden flex flex-row items-center justify-center relative">
                      <img
                        className="absolute my-0 mx-[!important] h-[63.56%] top-[18.18%] bottom-[18.26%] left-[calc(50%_-_22px)] max-h-full w-11 z-[0]"
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative font-semibold">
                    E - Consult
                  </div>
                </div>
                <div className="w-[200px] flex flex-col items-center justify-start gap-[15px]">
                  <div className="flex flex-row items-center justify-center">
                    <div className="overflow-hidden flex flex-row items-center justify-center">
                      <img
                        className="relative w-[36.67px] h-11"
                        alt=""
                        src="/vector2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative font-semibold">
                    Find a Doctor
                  </div>
                </div>
                <div className="w-[200px] flex flex-col items-center justify-start gap-[15px]">
                  <div className="flex flex-row items-center justify-center">
                    <div className="overflow-hidden flex flex-row items-center justify-center">
                      <img
                        className="relative w-11 h-11"
                        alt=""
                        src="/vector3.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative font-semibold">
                    Insurance Cover
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px flex flex-row items-end justify-center gap-[10px]">
            <div className="relative rounded-[50%] bg-gray-200 w-2.5 h-2.5" />
            <div className="relative rounded-[50%] bg-gray-200 w-2.5 h-2.5" />
            <div className="relative rounded-[50%] bg-gray-200 w-2.5 h-2.5" />
            <div className="relative rounded-[50%] bg-gray-200 w-2.5 h-2.5" />
            <div className="relative rounded-[50%] bg-white w-4 h-4" />
            <div className="relative rounded-[50%] bg-gray-200 w-2.5 h-2.5" />
            <div className="relative rounded-[50%] bg-gray-200 w-2.5 h-2.5" />
            <div className="relative rounded-[50%] bg-gray-200 w-2.5 h-2.5" />
            <div className="relative rounded-[50%] bg-gray-200 w-2.5 h-2.5" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col pt-[100px] px-0 pb-[75px] items-center justify-start gap-[75px] text-37xl text-aster-blue">
        <div className="self-stretch flex flex-col py-0 px-[50px] items-center justify-center gap-[75px] lg:ps-8 lg:pe-8 lg:box-border md:ps-8 md:pe-8 md:box-border sm:ps-4 sm:pe-4 sm:box-border">
          <div className="self-stretch flex flex-row items-center justify-center gap-[75px] md:flex-col md:items-start md:justify-center">
            <div className="w-[618px] flex flex-col items-start justify-center gap-[40px] sm:self-stretch sm:w-auto">
              <b className="self-stretch relative leading-[70px]">
              {t("hero.Committed to your Safety")}
              </b>
              <div className="self-stretch relative text-3xl leading-[132%] font-medium text-grey sm:self-stretch sm:w-auto">{`At Aster Hospital Oman we continue to follow the highest level of safety precautions as we treat our patients. We are strictly adhering to all ICMR & WHO mandated protocols, to keep you and your family safe & healthy.`}</div>
              <div className="rounded-xl bg-aster-green w-[306px] h-16 flex flex-row py-0 px-5 box-border items-center justify-center text-center text-2xl text-white font-poppins">
                <b className="flex-1 relative leading-[64px]">View More</b>
              </div>
            </div>
            <div className="rounded-xl bg-blue-light w-[647px] h-[622px] overflow-hidden shrink-0 flex flex-col py-0 px-[30px] box-border items-end justify-center relative md:self-stretch md:w-auto sm:self-stretch sm:w-auto sm:h-[400px]">
              <img
                className="absolute my-0 mx-[!important] top-[calc(50%_-_260px)] left-[calc(50%_-_249px)] w-[498px] h-[571px] object-cover z-[0]"
                alt=""
                src="/image-22@2x.png"
              />
            </div>
          </div>
          <div className="rounded-[32px] bg-white flex flex-row p-5 items-center justify-center gap-[75px] text-49xl border-[3px] border-solid border-blue-light lg:self-stretch lg:w-auto md:w-auto md:[align-self:unset] md:flex-col sm:self-stretch sm:w-auto sm:h-auto sm:rounded-3xl sm:p-2 sm:box-border">
            <div className="rounded-xl w-[615px] flex flex-row items-center justify-center relative gap-[10px] md:self-stretch md:w-auto sm:self-stretch sm:w-auto sm:h-auto">
              <img
                className="flex-1 relative rounded-[13px] max-w-full overflow-hidden h-[758px] object-cover z-[0] md:flex-1 sm:flex-1 sm:h-[400px]"
                alt=""
                src="/image-16@2x.png"
              />
              <img
                className="absolute my-0 mx-[!important] top-[calc(50%_-_75px)] left-[calc(50%_-_75px)] w-[150px] h-[150px] z-[1] sm:w-[75px] sm:h-[75px] [&.animate]:sm:animate-[3s_ease_0s_3_normal_forwards_scale-up] sm:opacity-[1]"
                alt=""
                src="/play-button.svg"
                data-animate-on-scroll
              />
            </div>
            <div className="w-[615px] flex flex-col items-center justify-center gap-[70px] md:self-stretch md:w-auto md:flex-col sm:items-start sm:justify-center sm:ps-0 sm:pe-0 sm:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[30px] sm:w-auto sm:[align-self:unset] sm:items-start sm:justify-start sm:ps-4 sm:pe-4 sm:box-border">
                <div className="relative leading-[68.5px] font-black inline-block w-[435px] sm:self-stretch sm:w-auto">
                  <span>{`We’ll treat `}</span>
                  <span className="text-aster-green">you well</span>
                </div>
                <div className="self-stretch relative text-3xl leading-[132%] font-medium text-grey">
                  That’s our simple promise, and one that makes life easy for
                  our patients and their families, even when ailments and
                  treatments may be complex. All our Hospital specialists and
                  support staff work in a coordinated and compassionate manner,
                  delivering the best and latest care for all medical
                  conditions.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-5xl text-black font-poppins">
                <div className="self-stretch rounded-lg flex flex-row items-center justify-between">
                  <div className="relative font-medium">
                    Preventive Health Check Packages
                  </div>
                  <img
                    className="relative w-[24.21px] h-6"
                    alt=""
                    src="/asiconoutlinearrowsquareup.svg"
                  />
                </div>
                <div className="self-stretch relative box-border h-[3px] border-t-[3px] border-solid border-blue-light" />
                <div className="self-stretch rounded-lg flex flex-row items-center justify-between">
                  <div className="relative font-medium">
                    Immunisation Vaccination
                  </div>
                  <img
                    className="relative w-[24.21px] h-6"
                    alt=""
                    src="/asiconoutlinearrowsquareup1.svg"
                  />
                </div>
                <div className="self-stretch relative box-border h-[3px] border-t-[3px] border-solid border-blue-light" />
                <div className="self-stretch rounded-lg flex flex-row items-center justify-between">
                  <div className="relative font-medium">Home Care Services</div>
                  <img
                    className="relative w-[24.21px] h-6"
                    alt=""
                    src="/asiconoutlinearrowsquareup2.svg"
                  />
                </div>
                <div className="self-stretch relative box-border h-[3px] border-t-[3px] border-solid border-blue-light" />
                <div className="self-stretch rounded-lg flex flex-row items-center justify-between">
                  <div className="relative font-medium">
                    Aster Maternity Packages
                  </div>
                  <img
                    className="relative w-[24.21px] h-6"
                    alt=""
                    src="/asiconoutlinearrowsquareup3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col py-[50px] px-0 items-center justify-center gap-[50px] text-center lg:self-stretch lg:w-auto lg:items-center lg:justify-center lg:ps-0 lg:box-border md:py-[50px] md:px-0 md:box-border sm:self-stretch sm:w-auto sm:flex-col sm:gap-[30px] sm:items-center sm:justify-center sm:py-[50px] sm:px-0 sm:box-border">
            <div className="flex flex-col items-center justify-start gap-[5px] lg:self-stretch lg:w-auto">
              <b className="self-stretch relative leading-[70px] sm:text-[42px]">
                Patient and Visitor Guide
              </b>
              <div className="self-stretch relative text-3xl leading-[132%] font-medium text-grey">
                Everything you need to know about getting care at Aster
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[30px] text-start text-5xl font-work-sans lg:self-stretch lg:w-auto lg:flex-row lg:gap-[30px] lg:items-center lg:justify-center lg:ps-0 lg:pe-0 lg:box-border md:self-stretch md:w-auto md:flex-col md:ps-0 md:pe-0 md:box-border sm:self-stretch sm:w-auto sm:flex-col sm:gap-[30px] sm:ps-0 sm:pe-0 sm:box-border">
              <div className="w-[655px] flex flex-col items-start justify-start gap-[30px] lg:flex-col md:self-stretch md:w-auto md:flex-1 sm:ps-0 sm:pe-0 sm:box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[30px] md:flex-row sm:flex-col">
                  <div className="flex-1 bg-blue-light overflow-hidden flex flex-col py-[50px] px-[15px] items-start justify-start gap-[20px] sm:flex-[unset] sm:self-stretch">
                    <img
                      className="relative w-9 h-9 overflow-hidden shrink-0"
                      alt=""
                      src="/hospital-1.svg"
                    />
                    <div className="self-stretch relative font-semibold inline-block h-[50px] shrink-0">
                      Plan your visit
                    </div>
                    <div className="self-stretch relative text-lg leading-[132%] font-medium font-heading-01 text-paragraph-text">
                      Know what to expect and get to tips to make your visit
                      easy and comfortable
                    </div>
                  </div>
                  <div className="flex-1 bg-blue-light overflow-hidden flex flex-col py-[50px] px-[15px] items-start justify-start gap-[20px] sm:flex-[unset] sm:self-stretch">
                    <img
                      className="relative w-9 h-9 overflow-hidden shrink-0"
                      alt=""
                      src="/stethoscope-1.svg"
                    />
                    <div className="self-stretch relative font-semibold inline-block h-[50px] shrink-0">
                      All about Appointment
                    </div>
                    <div className="self-stretch relative text-lg leading-[132%] font-medium font-heading-01 text-paragraph-text">
                      Know what to expect and get to tips to make your visit
                      easy and comfortable
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[30px] md:flex-row sm:flex-col">
                  <div className="flex-1 bg-blue-light overflow-hidden flex flex-col py-[50px] px-[15px] items-start justify-start gap-[20px] sm:flex-[unset] sm:self-stretch">
                    <img
                      className="relative w-9 h-9 overflow-hidden shrink-0"
                      alt=""
                      src="/hospital-11.svg"
                    />
                    <div className="self-stretch relative font-semibold inline-block h-[50px] shrink-0">
                      <p className="m-0">{`Admission &`}</p>
                      <p className="m-0">Discharge</p>
                    </div>
                    <div className="self-stretch relative text-lg leading-[132%] font-medium font-heading-01 text-paragraph-text">
                      Know what to expect and get to tips to make your visit
                      easy and comfortable
                    </div>
                  </div>
                  <div className="flex-1 bg-blue-light overflow-hidden flex flex-col py-[50px] px-[15px] items-start justify-start gap-[20px] sm:flex-[unset] sm:self-stretch">
                    <img
                      className="relative w-9 h-9 overflow-hidden shrink-0"
                      alt=""
                      src="/hospital-12.svg"
                    />
                    <div className="self-stretch relative font-semibold inline-block h-[50px] shrink-0">{`Patient Rights & Responsibilities`}</div>
                    <div className="self-stretch relative text-lg leading-[132%] font-medium font-heading-01 text-paragraph-text">
                      Know what to expect and get to tips to make your visit
                      easy and comfortable
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="relative w-[485px] h-[626px] object-cover lg:w-[500px] lg:self-stretch lg:h-auto md:self-stretch md:w-auto md:flex-1"
                alt=""
                src="/rectangle-66@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch bg-whitesmoke flex flex-col p-[50px] items-center justify-center gap-[80px] lg:ps-8 lg:pe-8 lg:box-border md:ps-8 md:pe-8 md:box-border sm:gap-[80px] sm:items-center sm:justify-center sm:ps-4 sm:pe-4 sm:box-border">
          <div className="self-stretch flex flex-row items-center justify-center gap-[168px] lg:flex-row md:flex-col">
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <b className="relative leading-[70px]">Our Specialisations</b>
              <div className="relative text-3xl leading-[132%] font-medium text-grey flex items-center w-[856px] lg:w-[600px] md:self-stretch md:w-auto">{`At Aster Hospital Oman we continue to follow the highest level of safety precautions as we treat our patients. We are strictly adhering to all ICMR & WHO mandated protocols, to keep you and your family safe & healthy.`}</div>
            </div>
            <div className="rounded-xl box-border w-[312px] h-16 flex flex-row py-0 px-5 items-center justify-center text-center text-2xl text-aster-green font-poppins border-[3px] border-solid border-aster-green lg:flex-1 lg:flex-row lg:items-end lg:justify-center lg:ps-0 lg:pe-0 lg:box-border sm:self-stretch sm:w-auto">
              <b className="flex-1 relative leading-[64px]">View More</b>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[29px] text-5xl text-gray-100 font-poppins lg:gap-[20px] md:ps-0 md:pe-0 md:box-border">
            <div className="rounded-xl bg-white w-[313px] h-[420px] flex flex-col p-[15px] box-border items-center justify-start gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[281px] shrink-0 object-cover"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className="self-stretch flex-1 relative leading-[35.5px] font-medium">
                Anesthesiology
              </div>
            </div>
            <div className="rounded-xl bg-white w-[314px] h-[420px] flex flex-col p-[15px] box-border items-center justify-start gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[281px] shrink-0 object-cover"
                alt=""
                src="/mask-group1@2x.png"
              />
              <div className="self-stretch flex-1 relative leading-[35.5px] font-medium">
                Anesthesiology
              </div>
            </div>
            <div className="rounded-xl bg-white w-[314px] h-[420px] flex flex-col p-[15px] box-border items-center justify-start gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[281px] shrink-0 object-cover"
                alt=""
                src="/mask-group2@2x.png"
              />
              <div className="self-stretch flex-1 relative leading-[35.5px] font-medium">
                Anesthesiology
              </div>
            </div>
            <div className="rounded-xl bg-white w-[313px] h-[420px] flex flex-col p-[15px] box-border items-center justify-start gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[281px] shrink-0 object-cover"
                alt=""
                src="/mask-group3@2x.png"
              />
              <div className="self-stretch flex-1 relative leading-[35.5px] font-medium">
                Anesthesiology
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col py-0 px-[50px] items-center justify-start text-center md:ps-8 md:pe-8 md:box-border sm:items-center sm:justify-center sm:ps-4 sm:pe-4 sm:box-border">
          <div className="self-stretch bg-white flex flex-col py-0 px-[50px] items-center justify-center gap-[50px]">
            <div className="self-stretch relative h-[70px]">
              <b className="absolute w-full top-[0%] left-[0%] leading-[70px] inline-block">
                Meet our Specialists
              </b>
            </div>
            <div className="w-[1523px] flex flex-row flex-wrap items-center justify-center gap-[30px] text-start text-5xl font-work-sans lg:self-stretch lg:w-auto lg:gap-[30px] md:self-stretch md:w-auto md:flex-row sm:self-stretch sm:w-auto sm:flex-col sm:gap-[16px] sm:items-center sm:justify-center sm:ps-0 sm:pe-0 sm:box-border">
              <div className="flex flex-col items-start justify-start gap-[20px] sm:self-stretch sm:w-auto sm:ps-0 sm:pe-0 sm:box-border">
                <div className="self-stretch rounded-2xl box-border h-[360px] overflow-hidden shrink-0 flex flex-row p-2.5 items-start justify-start border-[2px] border-solid border-aster-green">
                  <img
                    className="flex-1 relative rounded-md max-w-full overflow-hidden h-[340px] object-cover"
                    alt=""
                    src="/rectangle-55@2x.png"
                  />
                </div>
                <div className="w-[312px] h-14 flex flex-col items-start justify-start">
                  <div className="relative font-semibold inline-block w-[313px] h-8 shrink-0">
                    Dr. Hatim Ali Al Lawati
                  </div>
                  <div className="relative text-base leading-[149%] font-medium font-heading-01 text-gray-300 flex items-center w-[312px]">
                    Senior Consultant Cardiology
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[20px] sm:self-stretch sm:w-auto sm:ps-0 sm:pe-0 sm:box-border">
                <div className="self-stretch rounded-2xl box-border h-[360px] overflow-hidden shrink-0 flex flex-row p-2.5 items-start justify-start border-[2px] border-solid border-aster-green">
                  <img
                    className="flex-1 relative rounded-md max-w-full overflow-hidden h-[340px] object-cover"
                    alt=""
                    src="/rectangle-551@2x.png"
                  />
                </div>
                <div className="w-[312px] h-14 flex flex-col items-start justify-start">
                  <div className="relative font-semibold inline-block w-[313px] h-8 shrink-0">
                    Dr. Hatim Ali Al Lawati
                  </div>
                  <div className="relative text-base leading-[149%] font-medium font-heading-01 text-gray-300 flex items-center w-[312px]">
                    Senior Consultant Cardiology
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[20px] sm:self-stretch sm:w-auto sm:ps-0 sm:pe-0 sm:box-border">
                <div className="self-stretch rounded-2xl box-border h-[360px] overflow-hidden shrink-0 flex flex-row p-2.5 items-start justify-start border-[2px] border-solid border-aster-green">
                  <img
                    className="flex-1 relative rounded-md max-w-full overflow-hidden h-[340px] object-cover"
                    alt=""
                    src="/rectangle-552@2x.png"
                  />
                </div>
                <div className="w-[312px] h-14 flex flex-col items-start justify-start">
                  <div className="relative font-semibold inline-block w-[313px] h-8 shrink-0">
                    Dr. Hatim Ali Al Lawati
                  </div>
                  <div className="relative text-base leading-[149%] font-medium font-heading-01 text-gray-300 flex items-center w-[312px]">
                    Senior Consultant Cardiology
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[20px] sm:self-stretch sm:w-auto sm:flex-1 sm:gap-[20px] sm:ps-0 sm:pe-0 sm:box-border">
                <div className="self-stretch rounded-2xl box-border h-[360px] overflow-hidden shrink-0 flex flex-row p-2.5 items-start justify-start border-[2px] border-solid border-aster-green">
                  <img
                    className="flex-1 relative rounded-md max-w-full overflow-hidden h-[340px] object-cover"
                    alt=""
                    src="/rectangle-553@2x.png"
                  />
                </div>
                <div className="w-[312px] h-14 flex flex-col items-start justify-start">
                  <div className="relative font-semibold inline-block w-[313px] h-8 shrink-0">
                    Dr. Hatim Ali Al Lawati
                  </div>
                  <div className="relative text-base leading-[149%] font-medium font-heading-01 text-gray-300 flex items-center w-[312px]">
                    Senior Consultant Cardiology
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-aster-green w-[306px] h-16 flex flex-row py-0 px-5 box-border items-center justify-center text-2xl text-white font-poppins md:items-center md:justify-end">
              <b className="flex-1 relative leading-[64px]">View all Doctors</b>
            </div>
          </div>
        </div>
        <div className="topbar_wrapper overflow-hidden self-stretch flex flex-col py-0 px-[50px] items-center justify-center text-center md:ps-8 md:pe-8 md:box-border sm:ps-4 sm:pe-4 sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[70px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
              <b className="relative leading-[70px] inline-block w-[564px] md:self-stretch md:w-auto">
                Exceptional Facilities
              </b>
              <div className="relative text-3xl leading-[132%] font-medium text-grey flex items-center justify-center w-[1322px] md:self-stretch md:w-auto">
                Our facilities have won several certifications. including a
                Quality department led by experts in hospital quality
                management, which ensures that each and every facility not just
                maintains but also upgrades its quality standards, time and
                again.
              </div>
            </div>
            <div className="self-stretch flex flex-col py-2.5 px-0 items-start justify-start">
              <div className="overflow-x-auto flex flex-row items-start justify-start gap-[30px]">
                <div className="rounded-xl bg-white flex flex-col p-[15px] items-center justify-start border-[3px] border-solid border-blue-light">
                  <img
                    className="relative w-[503px] h-[337px] object-cover"
                    alt=""
                    src="/mask-group4@2x.png"
                  />
                </div>
                <div className="rounded-xl bg-white flex flex-col p-[15px] items-center justify-start border-[3px] border-solid border-blue-light">
                  <img
                    className="relative w-[503px] h-[337px] object-cover"
                    alt=""
                    src="/mask-group5@2x.png"
                  />
                </div>
                <div className="rounded-xl bg-white flex flex-col p-[15px] items-center justify-start border-[3px] border-solid border-blue-light">
                  <img
                    className="relative w-[503px] h-[337px] object-cover"
                    alt=""
                    src="/mask-group6@2x.png"
                  />
                </div>
                <div className="rounded-xl bg-white flex flex-col p-[15px] items-center justify-start border-[3px] border-solid border-blue-light">
                  <img
                    className="relative w-[503px] h-[337px] object-cover"
                    alt=""
                    src="/mask-group7@2x.png"
                  />
                </div>
                <div className="rounded-xl bg-white flex flex-col p-[15px] items-center justify-start border-[3px] border-solid border-blue-light">
                  <img
                    className="relative w-[503px] h-[337px] object-cover"
                    alt=""
                    src="/mask-group8@2x.png"
                  />
                </div>
                <div className="rounded-xl bg-white flex flex-col p-[15px] items-center justify-start border-[3px] border-solid border-blue-light">
                  <img
                    className="relative w-[503px] h-[337px] object-cover"
                    alt=""
                    src="/mask-group9@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col py-[70px] px-[50px] items-center justify-center bg-[url('/network@3x.png')] bg-cover bg-no-repeat bg-[top] text-56xl text-white lg:ps-[5px] lg:pe-[50px] lg:box-border md:items-center md:justify-center md:ps-0 md:pe-0 md:box-border sm:ps-0 sm:pe-0 sm:box-border">
          <div className="w-full flex flex-row items-end justify-between max-w-[1340px] lg:items-center lg:justify-center md:w-full md:flex-col sm:w-full sm:items-start sm:justify-center">
            <div className="flex-1 flex flex-row flex-wrap items-center justify-between max-w-[1340px] md:flex-col md:flex-[unset] md:self-stretch">
              <div className="flex flex-row p-2.5 items-center justify-center lg:ps-0 lg:pe-0 lg:box-border">
                <b className="relative leading-[80px] inline-block w-[461px] h-[170px] shrink-0 md:text-center sm:flex-1">
                  Aster Global Network
                </b>
              </div>
              <div className="w-[654px] flex flex-row flex-wrap items-center justify-center gap-[30px] text-center text-46xl font-work-sans sm:flex-col">
                <div className="rounded-xl bg-aster-green w-[312px] flex flex-col py-[50px] px-[100px] box-border items-center justify-center sm:ps-0 sm:pe-0 sm:box-border">
                  <div className="relative w-[106px] h-[91px] sm:self-stretch sm:w-auto">
                    <b className="absolute top-[0px] left-[calc(50%_-_53px)]">
                      127
                    </b>
                    <div className="absolute top-[70px] left-[17px] text-lg font-semibold">
                      CLINICS
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-aster-green w-[312px] flex flex-col py-[50px] px-[100px] box-border items-center justify-center sm:ps-0 sm:pe-0 sm:box-border">
                  <div className="relative w-[184px] h-[91px]">
                    <b className="absolute top-[0px] left-[calc(50%_-_92px)]">
                      26156
                    </b>
                    <div className="absolute top-[70px] left-[39px] text-lg font-semibold">
                      ASTERIAN’S
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-aster-green w-[312px] flex flex-col py-[50px] px-[100px] box-border items-center justify-center sm:ps-0 sm:pe-0 sm:box-border">
                  <div className="relative w-[100px] h-[91px]">
                    <b className="absolute top-[0px] left-[calc(50%_-_39px)]">
                      32
                    </b>
                    <div className="absolute top-[70px] left-[0px] text-lg font-semibold">
                      HOSPITALS
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-aster-green w-[312px] flex flex-col py-[50px] px-[100px] box-border items-center justify-center sm:ps-0 sm:pe-0 sm:box-border">
                  <div className="relative w-[118px] h-[91px]">
                    <b className="absolute top-[0px] left-[calc(50%_-_52px)]">
                      521
                    </b>
                    <div className="absolute top-[70px] left-[0px] text-lg font-semibold">
                      PHARMACIES
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-aster-green w-[312px] flex flex-col py-[50px] px-[100px] box-border items-center justify-end">
                  <div className="relative w-[104px] h-[91px]">
                    <b className="absolute top-[0px] left-[calc(50%_-_20px)]">
                      7
                    </b>
                    <div className="absolute top-[70px] left-[0px] text-lg font-semibold">
                      COUNTRIES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col py-0 px-[50px] items-center justify-center gap-[50px] text-center lg:ps-8 lg:pe-8 lg:box-border md:self-stretch md:w-auto md:ps-8 md:pe-8 md:box-border sm:ps-4 sm:pe-4 sm:box-border">
          <b className="relative leading-[70px] inline-block w-[660px]">
            Health Library
          </b>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[27px] text-start text-xl">
            <div className="relative w-[429px] h-[641px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-none w-[429px] h-[280px] object-cover"
                alt=""
                src="/rectangle-75@2x.png"
              />
              <div className="absolute top-[388px] left-[31.39px] text-5xl font-semibold font-work-sans inline-block w-[305.34px] h-[50px]">
                Eat Right to Beat Tuberculosis
              </div>
              <div className="absolute top-[460px] left-[28.54px] leading-[132%] font-medium text-paragraph-text inline-block w-[371.93px]">
                Getting the right nutrition can help speed treatment and
                prevention includes healthy immunity.
              </div>
              <div className="absolute top-[321px] left-[31.39px] bg-aster-blue w-[152.2px] h-[38px]" />
              <div className="absolute top-[326px] left-[39.95px] leading-[132%] font-medium text-white inline-block w-[134.12px]">
                Dietetics
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-xl box-border w-[429px] h-[641px] border-[2px] border-solid border-blue-light" />
            </div>
            <div className="relative w-[429px] h-[641px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-none w-[429px] h-[280px] object-cover"
                alt=""
                src="/rectangle-751@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] rounded-xl box-border w-[429px] h-[641px] border-[2px] border-solid border-blue-light" />
              <div className="absolute top-[388px] left-[calc(50%_-_183.11px)] text-5xl font-semibold font-work-sans inline-block w-[305.34px] h-[50px]">
                Eat Right to Beat Tuberculosis
              </div>
              <div className="absolute top-[460px] left-[28.54px] leading-[132%] font-medium text-paragraph-text inline-block w-[371.93px]">
                Getting the right nutrition can help speed treatment and
                prevention includes healthy immunity.
              </div>
              <div className="absolute top-[321px] left-[31.39px] bg-aster-blue w-[152.2px] h-[38px]" />
              <div className="absolute top-[326px] left-[39.95px] leading-[132%] font-medium text-white inline-block w-[134.12px]">
                Dietetics
              </div>
            </div>
            <div className="relative w-[429px] h-[641px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-none w-[429px] h-[280px] object-cover"
                alt=""
                src="/rectangle-752@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] rounded-xl box-border w-[429px] h-[641px] border-[2px] border-solid border-blue-light" />
              <div className="absolute top-[388px] left-[calc(50%_-_183.11px)] text-5xl font-semibold font-work-sans inline-block w-[305.34px] h-[50px]">
                Eat Right to Beat Tuberculosis
              </div>
              <div className="absolute top-[460px] left-[28.54px] leading-[132%] font-medium text-paragraph-text inline-block w-[371.93px]">
                Getting the right nutrition can help speed treatment and
                prevention includes healthy immunity.
              </div>
              <div className="absolute top-[321px] left-[31.39px] bg-aster-blue w-[152.2px] h-[38px]" />
              <div className="absolute top-[326px] left-[39.95px] leading-[132%] font-medium text-white inline-block w-[134.12px]">
                Dietetics
              </div>
            </div>
          </div>
          <div className="rounded-xl box-border w-[306px] h-16 flex flex-row py-0 px-5 items-center justify-center text-2xl text-aster-green font-poppins border-[3px] border-solid border-aster-green md:items-center md:justify-end">
            <b className="flex-1 relative leading-[64px]">View More</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
