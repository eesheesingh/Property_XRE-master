import { useEffect } from "react";
import { useMatchStore } from "../../../store/projectStore";
import CustomInput from "../../common/CustomInput";

export default function UnitAssociatedContacts(props) {
  const { updateInputValue, getValue } = props;
  const type = "unitInformation";

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Unit Associated Contacts
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Add contact information for people associated with this unit
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <CustomInput
            title="Contact Name"
            type="text"
            name="associatedName"
            inputProps={{
              onChange: (e) => 
                updateInputValue(e.target.value, e, type, "associatedContacts"),
            }}
            getValue={() => 
              getValue(type, "associatedContacts")?.associatedName || ""
            }
          />
          <CustomInput
            title="Contact Email"
            type="email"
            name="associatedEmail"
            inputProps={{
              onChange: (e) => 
                updateInputValue(e.target.value, e, type, "associatedContacts"),
            }}
            getValue={() => 
              getValue(type, "associatedContacts")?.associatedEmail || ""
            }
          />
          <CustomInput
            title="Contact Number"
            type="tel"
            name="associatedNumber"
            inputProps={{
              onChange: (e) => 
                updateInputValue(e.target.value, e, type, "associatedContacts"),
            }}
            getValue={() => 
              getValue(type, "associatedContacts")?.associatedNumber || ""
            }
          />
          <CustomInput
            title="Role"
            type="text"
            name="role"
            inputProps={{
              onChange: (e) => 
                updateInputValue(e.target.value, e, type, "associatedContacts"),
            }}
            getValue={() => 
              getValue(type, "associatedContacts")?.role || ""
            }
          />
        </div>
      </div>
    </div>
  );
}