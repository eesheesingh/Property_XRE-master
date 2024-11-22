import { useState } from 'react';
import CustomInput from '../components/common/CustomInput';
import { useMatchStore } from '../store/projectStore';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddAssociatedPerson = () => {
  const { properties, updateProperty } = useMatchStore();
  const { propertyId } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    associatedName: '',
    associatedEmail: '',
    associatedNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (!propertyId) {
      toast.error("Property ID is missing!");
      return;
    }

    if (!formData.associatedName || !formData.associatedEmail || !formData.associatedNumber) {
      toast.error("Please fill in all required fields!");
      return;
    }

    try {
      const property = properties.find(p => p.id === propertyId);
      const updatedAssociatedContacts = [
        ...(property.associatedContacts || []),
        formData
      ];

      updateProperty(propertyId, { associatedContacts: updatedAssociatedContacts }, "associatedContacts");
      toast.success("Associated person added successfully!");
      setTimeout(() => {
        navigate(`/properties/${propertyId}`);
      }, 1000);
    } catch (error) {
      toast.error("Error adding associated person");
      console.error("Update error:", error);
    }
  };

  const handleCancel = () => {
    navigate(`/properties/${propertyId}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md px-6 py-8 bg-white shadow-md rounded-lg">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">Add Associated Person</h2>
            <p className="mt-1 text-sm text-gray-600">
              Please fill in all required fields (*)
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <CustomInput
                title="Person Name*"
                type="text"
                name="associatedName"
                inputProps={{
                  onChange: handleInputChange,
                  value: formData.associatedName,
                  placeholder: "Enter person name",
                  className: "w-full"
                }}
              />
            </div>

            <div>
              <CustomInput
                title="Email Address*"
                type="email"
                name="associatedEmail"
                inputProps={{
                  onChange: handleInputChange,
                  value: formData.associatedEmail,
                  placeholder: "Enter email address",
                  className: "w-full"
                }}
              />
            </div>

            <div>
              <CustomInput
                title="Contact Number*"
                type="tel"
                name="associatedNumber"
                inputProps={{
                  onChange: handleInputChange,
                  value: formData.associatedNumber,
                  placeholder: "Enter contact number",
                  className: "w-full"
                }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-red-900 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAssociatedPerson;