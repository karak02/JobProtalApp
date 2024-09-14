import React, { useState } from 'react';

const filterData = [
  {
    type: "location",
    options: ["Delhi NCR", "Bangalore", "Mumbai", "Hyderabad", "Chennai"]
  },
  {
    type: "industry",
    options: [
      "Frontend Developer", "Backend Developer", "Full Stack Developer", 
      "Data Scientist", "Cyber Security Engineer"
    ]
  },
  {
    type: "salary",
    options: [
      "0 - 40k", "40k - 80k", "80k - 120k", "120k+"
    ]
  }
];

const FilterCard = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    location: [],
    industry: [],
    salary: []
  });

  // Function to handle filter selection
  const handleCheckboxChange = (filterType, option) => {
    setSelectedFilters(prevState => {
      const newFilter = prevState[filterType].includes(option)
        ? prevState[filterType].filter(item => item !== option)
        : [...prevState[filterType], option];

      return {
        ...prevState,
        [filterType]: newFilter
      };
    });
  };

  return (
    <div className="filter-container p-5">
      <h2 className="font-bold text-xl mb-5">Filter Jobs</h2>

      {/* Location Filter */}
      <div className="mb-5">
        <h3 className="font-bold mb-3">Location</h3>
        {filterData.find(f => f.type === "location").options.map((location, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`location-${index}`}
              onChange={() => handleCheckboxChange('location', location)}
              checked={selectedFilters.location.includes(location)}
              className="mr-2"
            />
            <label htmlFor={`location-${index}`} className="text-sm">{location}</label>
          </div>
        ))}
      </div>

      {/* Industry Filter */}
      <div className="mb-5">
        <h3 className="font-bold mb-3">Industry</h3>
        {filterData.find(f => f.type === "industry").options.map((industry, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`industry-${index}`}
              onChange={() => handleCheckboxChange('industry', industry)}
              checked={selectedFilters.industry.includes(industry)}
              className="mr-2"
            />
            <label htmlFor={`industry-${index}`} className="text-sm">{industry}</label>
          </div>
        ))}
      </div>

      {/* Salary Filter */}
      <div className="mb-5">
        <h3 className="font-bold mb-3">Salary</h3>
        {filterData.find(f => f.type === "salary").options.map((salary, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`salary-${index}`}
              onChange={() => handleCheckboxChange('salary', salary)}
              checked={selectedFilters.salary.includes(salary)}
              className="mr-2"
            />
            <label htmlFor={`salary-${index}`} className="text-sm">{salary}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCard;
