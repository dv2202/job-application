import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import useForm from '../hooks/useForm';
import validateForm from '../hooks/validateForm';

const JobApplicationForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm({
    fullName: '',
    email: '',
    phoneNumber: '',
    applyingForPosition: '',
    relevantExperience: '',
    portfolioUrl: '',
    managementExperience: '',
    additionalSkills: [],
    preferredInterviewTime: '',
  }, validateForm);

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            className={`shadow appearance-none border ${errors.fullName ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={`shadow appearance-none border ${errors.email ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="integer"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            className={`shadow appearance-none border ${errors.phoneNumber ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="applyingForPosition">
            Applying for Position
          </label>
          <select
            name="applyingForPosition"
            value={values.applyingForPosition}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Position</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
          {errors.applyingForPosition && <p className="text-red-500 text-xs italic">{errors.applyingForPosition}</p>}
        </div>

        {(values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer') && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="relevantExperience">
              Relevant Experience (years)
            </label>
            <input
              type="number"
              name="relevantExperience"
              value={values.relevantExperience}
              onChange={handleChange}
              className={`shadow appearance-none border ${errors.relevantExperience ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.relevantExperience && <p className="text-red-500 text-xs italic">{errors.relevantExperience}</p>}
          </div>
        )}

        {values.applyingForPosition === 'Designer' && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="portfolioUrl">
              Portfolio URL
            </label>
            <input
              type="text"
              name="portfolioUrl"
              value={values.portfolioUrl}
              onChange={handleChange}
              className={`shadow appearance-none border ${errors.portfolioUrl ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.portfolioUrl && <p className="text-red-500 text-xs italic">{errors.portfolioUrl}</p>}
          </div>
        )}

        {values.applyingForPosition === 'Manager' && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="managementExperience">
              Management Experience
            </label>
            <input
              type="text"
              name="managementExperience"
              value={values.managementExperience}
              onChange={handleChange}
              className={`shadow appearance-none border ${errors.managementExperience ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            />
            {errors.managementExperience && <p className="text-red-500 text-xs italic">{errors.managementExperience}</p>}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Additional Skills
          </label>
          {['JavaScript', 'CSS', 'Python'].map((skill) => (
            <label key={skill} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="additionalSkills"
                value={skill}
                checked={values.additionalSkills.includes(skill)}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-700">{skill}</span>
            </label>
          ))}
          {errors.additionalSkills && <p className="text-red-500 text-xs italic">{errors.additionalSkills}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredInterviewTime">
            Preferred Interview Time
          </label>
          <input
            type="datetime-local"
            name="preferredInterviewTime"
            value={values.preferredInterviewTime}
            onChange={handleChange}
            className={`shadow appearance-none border ${errors.preferredInterviewTime ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.preferredInterviewTime && <p className="text-red-500 text-xs italic">{errors.preferredInterviewTime}</p>}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Apply
          </button>
        </div>
      </form>
      {Object.keys(errors).length === 0 && values.fullName && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <h2 className="text-lg font-bold">Form Data:</h2>
          <p><strong>Name:</strong> {values.fullName}</p>
          <p><strong>Email:</strong> {values.email}</p>
          <p><strong>Phone Number:</strong> {values.phoneNumber}</p>
          <p><strong>Applying for Position:</strong> {values.applyingForPosition}</p>
          {values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer' ? (<p><strong>Relevant Experience:</strong> {values.relevantExperience}</p>) : null}
          {values.applyingForPosition === 'Manager' ? (<p><strong>Management Experience:</strong> {values.managementExperience}</p>) : null}
          {values.additionalSkills.length > 0 ? (<p><strong>Additional Skills:</strong> {values.additionalSkills.join(', ')}</p>) : null}
          {values.preferredInterviewTime ? (<p><strong>Preferred Interview Time:</strong> {values.preferredInterviewTime}</p>) : null}
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;
