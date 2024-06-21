const validateForm = (values) => {
    let errors = {};
  
    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d+$/.test(values.phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be a valid number';
    }
  
    if (values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer') {
      if (!values.relevantExperience) {
        errors.relevantExperience = 'Relevant Experience is required';
      } else if (values.relevantExperience <= 0) {
        errors.relevantExperience = 'Relevant Experience must be greater than 0';
      }
    }
  
    if (values.applyingForPosition === 'Designer') {
      if (!values.portfolioUrl) {
        errors.portfolioUrl = 'Portfolio URL is required';
      } else if (!/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(values.portfolioUrl)) {
        errors.portfolioUrl = 'Portfolio URL is invalid';
      }
    }
  
    if (values.applyingForPosition === 'Manager') {
      if (!values.managementExperience) {
        errors.managementExperience = 'Management Experience is required';
      }
    }
  
    if (!values.additionalSkills || values.additionalSkills.length === 0) {
      errors.additionalSkills = 'At least one skill must be selected';
    }
  
    if (!values.preferredInterviewTime) {
      errors.preferredInterviewTime = 'Preferred Interview Time is required';
    }
  
    return errors;
  };
  
  export default validateForm;
  