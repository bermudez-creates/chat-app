import React from 'react';

const GenderCheckbox = (onCheckboxChange, selectedGender) => {
  console.log(onCheckboxChange, selectedGender);
  return (
    <div className="flex">
      {/* Male CheckBox  */}
      <div className="form-control">
        <label className={'label gap-2 cursor-pointer'}>
          <span className="label-text text-purple-100">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
      {/* Female CheckBox */}
      <div className="form-control">
        <label className={'label gap-2 cursor-pointer'}>
          <span className="label-text text-purple-100">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
