import { useEffect } from "react";
import { useMatchStore } from "../../../store/projectStore";
import CustomInput from "../../common/CustomInput";

export default function ProjectAssociatedContacts(props) {
  const { updateInputValue, getValue } = props;
  const type = "associatedContacts";

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Project Associated Contacts
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Add contact information for people associated with this property
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <CustomInput
            title="Contact Name"
            type="text"
            name="associatedName"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "associatedName")}
          />
          <CustomInput
            title="Contact Email"
            type="email"
            name="associatedEmail"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "associatedEmail")}
          />
          <CustomInput
            title="Contact Number"
            type="tel"
            name="associatedNumber"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "associatedNumber")}
          />
          <CustomInput
            title="Designation"
            type="text"
            name="designation"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "designation")}
          />
        </div>
      </div>
    </div>
  );
}