import graphqlRequest from "./graphqlRequest";

export async function getAllDoctors(preview) {
  const query = {
    query: `query postsQuery {
              doctors(first:300,where: {orderby: {field: TITLE, order: ASC}}) {
                nodes { 
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  slug
                  doctorFields{
                      doctorName
                      doctorNameAr
                      designation
                      designationAr
                      languages
                      languagesAr
                      nationality
                      nationalityAr
                      specialization
                      specializationAr
                      location
                      designation
                      designationAr
                  }
                }
              }
    
          }`
  };
  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.doctors;
  return allPosts;
}


export async function getRandomDoctors() {
  const query = {
    query: `query postsQuery {
              doctors(first:20,where: {orderby: {field: TITLE, order: ASC}}) {
                nodes { 
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  slug
                  doctorFields{
                      doctorName
                      doctorNameAr
                      designation
                      designationAr
                      languages
                      languagesAr
                      nationality
                      nationalityAr
                      specialization
                      specializationAr
                      location
                      designation
                      designationAr
                  }
                }
              }
    
          }`
  };
  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.doctors;
  return allPosts;
}

export async function getSingleDoctor(slug) {
  const query = {
    query: `query getSingleDoctor {
      doctor(id: "${slug}", idType: SLUG) {
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        doctorFields {
            associations
            associationsAr
            designation
            designationAr
            doctorName
            doctorNameAr
            education
            educationAr
            experience
            experienceAr
            expertise
            expertiseAr
            languages
            languagesAr
            licenses
            licensesAr
            nationality
            nationalityAr
            procedures
            proceduresAr
            specialization
            specializationAr
            typeOfPhysician
            typeOfPhysicianAr
            location
        }
      }
    }`
  };
  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.doctor;
  return singlePost;
}

export async function getDoctorSlugs() {
  const query = {
    query: `query getDoctorSlugs {
      doctors(first:300,where: {orderby: {field: TITLE, order: ASC}}){
        nodes{
          slug
        }
      }
    }`
  };
  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.doctors.nodes;
  return slugs;
}





export async function getAllSpecialization(language) {
  const query = {
    query: `query postsQuery{
      specialities(first: 100,where: {orderby: {field: TITLE, order: ASC},categoryName: "${language}"}) {
        nodes {
          categories {
            nodes {
              name
            }
          }
          content
          slug
          title
        }
      }
    
    
    }`
  };
  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.specialities.nodes;
  return allPosts;
}

export async function getSingleSpecialization(slug) {
  const query = {
    query: `query getSingleDoctor {
      speciality(id: "${slug}", idType: SLUG) {
        content
        title
        slug
      }
    }`
  };
  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.speciality;
  return singlePost;
}

export async function getSpecializationSlugs() {
  const query = {
    query: `query getDoctorSlugs {
      specialities(first:100){
        nodes{
          slug
        }
      }
    }`
  };
  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.specialities.nodes;
  return slugs;
}





export async function getLastBlogs(language) {
  const query = {
    query: `query postsQuery{
      blogs(last: 2, where: {categoryName: "${language}"}) {
        nodes {
          slug
          title
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    
    
    }`
  };
  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.blogs.nodes;
  return allPosts;
}

export async function getSingleBlog(slug) {
  const query = {
    query: `query getSingleDoctor {
      blog(id: "${slug}", idType: SLUG) {
        content
        title
        slug
      }
    }`
  };
  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.blog;
  return singlePost;
}


export async function getBlogSlugs() {
  const query = {
    query: `query getDoctorSlugs {
      blogs(first:100){
        nodes{
          slug
        }
      }
    }`
  };
  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.blogs.nodes;
  return slugs;
}







export async function getAllLocations() {
  const query = {
    query: `query postsQuery {
      locations(first:100) {
        nodes {
          slug
          title
    
          locationFields {
            address
            area
            city
            mapUrl
            specializations
          }
        }
      }
    
    }`
  };
  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.locations;
  return allPosts;
}

export async function getSingleLocation(slug) {
  const query = {
    query: `query getSingleDoctor {
      location(id: "${slug}", idType: SLUG) {
        title
        slug
        locationFields {
          address
          area
          city
          mapUrl
          specializations
        }
      }
    }`
  };
  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.location;
  return singlePost;
}

export async function getLocationSlugs() {
  const query = {
    query: `query getDoctorSlugs {
      locations(first:100){
        nodes{
          slug
        }
      }
    }`
  };
  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.locations.nodes;
  return slugs;
}








export async function getAllFecilities(language) {
  const query = {
    query: `query postsQuery{
      facilities(first: 100,where: {orderby: {field: TITLE, order: ASC}, categoryName: "${language}"}) {
        nodes {
          content
          slug
          title

        }
      }
    
    
    }`
  };
  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.facilities.nodes;
  return allPosts;
}


export async function getSingleFacilities(slug) {
  const query = {
    query: `query getSingleDoctor {
      facility(id: "${slug}", idType: SLUG) {
        content
        title
        slug
      }
    }`
  };
  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.facility;
  return singlePost;
}

export async function getFacilitySlugs() {
  const query = {
    query: `query getDoctorSlugs {
      facilities(first:100){
        nodes{
          slug
        }
      }
    }`
  };
  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.facilities.nodes;
  return slugs;
}

export async function getAllNewses() {
  const query = {
    query: `query postsQuery {
      newses(first:100) {
        nodes {
          featuredImage {
            node {
              sourceUrl
            }
          }
          title
          newsFields {
            mapUrl
          }
        }
      }
    
    }`
  };
  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.newses;
  return allPosts;
}





export async function getLastNews() {
  const query = {
    query: `query postsQuery{
      newses(first: 2) {
        nodes {
          featuredImage {
            node {
              sourceUrl
            }
          }
          title
          newsFields {
            mapUrl
          }
        }
      }
    
    
    }`
  };
  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.newses;
  return allPosts;
}