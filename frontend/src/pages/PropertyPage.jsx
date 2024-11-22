import { useParams, useNavigate } from "react-router-dom";
import { useMatchStore } from "../store/projectStore";
import { useEffect, useState } from "react";

const PropertyPage = () => {
  const { propertyId } = useParams();
  const properties = useMatchStore((state) => state.properties);
  const [property, setProperty] = useState(null);
  const [showUnits, setShowUnits] = useState(false);
  const navigate = useNavigate();

  const handleAddContact = () => {
    navigate(`/property/${propertyId}/add-contact`);
  };

  const handleAddUnitContact = () => {
    navigate(`/property/${propertyId}/unit/add-contact`);
  };

  useEffect(() => {
    const foundProperty = properties.find((prop) => prop.id === propertyId);
    if (foundProperty) {
      setProperty(foundProperty);
    } else {
      navigate("/properties");
    }
  }, [propertyId, properties, navigate]);

  if (!property) return <div>Loading...</div>;

  const handleShowUnits = () => {
    setShowUnits(!showUnits);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 px-6 py-8 bg-gray-50 rounded-lg shadow-md">
      {/* Header Section */}
      <header className="border-b pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
        <p className="text-gray-600 mt-1">
          <span className="font-medium">Type:</span> {property.type}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Location:</span> {property.location}
        </p>
        <p className="mt-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              property.status === "Approved"
                ? "bg-green-100 text-green-800"
                : property.status === "Drafts"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {property.status}
          </span>
        </p>
      </header>

      {/* Property Associated Contacts Section */}
      <div className="bg-white p-6 shadow rounded-lg mb-6">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Property Associated Contacts
          </h2>
          <button
            onClick={handleAddContact}
            className="px-4 py-2 text-sm font-medium text-white bg-red-900 rounded-md hover:bg-red-800"
          >
            Add Contact
          </button>
        </div>

        {property.associatedContacts?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {property.associatedContacts.map((contact, index) => (
              <div 
                key={index} 
                className="p-4 border rounded-lg bg-gray-50 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <p className="text-gray-900 font-medium">{contact.associatedName}</p>
                  <p className="text-gray-600 text-sm">
                    <span className="inline-block w-16">Email:</span>
                    {contact.associatedEmail}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="inline-block w-16">Phone:</span>
                    {contact.associatedNumber}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>No associated contacts available.</p>
            <p className="text-sm mt-2">Click the Add Contact button to add contacts.</p>
          </div>
        )}
      </div>

      {/* Floor Information Table */}
      <div className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-4 mb-4">
          Floor Information
        </h2>
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Floor Number</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Total Units</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Units Available</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Floor Area</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {property.floorInformation.floorNumber || "N/A"}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer"
                onClick={handleShowUnits}
              >
                {property.floorInformation.totalUnits || "N/A"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {property.floorInformation.unitsAvailable || "N/A"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {property.floorInformation.floorArea || "N/A"} sq.ft
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Unit Information Table */}
      {showUnits && (
  <div className="bg-white p-6 shadow rounded-lg mb-6">
    <div className="flex justify-between items-center border-b pb-4 mb-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Unit Details
      </h2>
      <button
        onClick={handleAddUnitContact}
        className="px-4 py-2 text-sm font-medium text-white bg-red-900 rounded-md hover:bg-red-800"
      >
        Add Unit Contact
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Area (sqft)</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Mezzanine Area</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Floor</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Industrial Lift</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Lift Capacity</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Type of Floor</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Type of Building</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Clear Height</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Centre Height</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Docks</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Dock Level</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Parking Space</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Ventilation</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Sky Light (%)</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Fire Provisions</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Fire NOC</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Fire Tank Capacity</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Rent (per sqft)</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Possession</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Office Space</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Toilets</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Company</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Contacts</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
        {property.unitInformation ? (
    <tr>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
        {property.unitInformation.area ? `${property.unitInformation.area} sqft` : "N/A"}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
        {property.unitInformation.mezzanineArea ? `${property.unitInformation.mezzanineArea} sqft` : "N/A"}
      </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.floor || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.industrialLift || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.liftCapacity || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.typeOfFloor || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.typeOfBuilding || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.clearHeight || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.centreHeight || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.noOfDocks || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.dockLevel || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.parkingSpace || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.ventilation || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.skyLight || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.fireProvisions || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.fireNOC || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.fireWaterTankCapacity || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              ₹{property.unitInformation.rent || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.possession || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.officeSpace || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.toilets || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.occupancyStatus || "N/A"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
              {property.unitInformation.occupiedCompanyName || "N/A"}
            </td>
            <td className="px-4 py-4 text-sm text-gray-900">
              {property.unitInformation.associatedContacts?.length > 0 ? (
                <div className="space-y-2">
                  {property.unitInformation.associatedContacts.map((contact, index) => (
                    <div key={index} className="p-2 border rounded bg-gray-50">
                      <p className="font-medium">{contact.associatedName}</p>
                      <p className="text-sm text-gray-600">{contact.associatedEmail}</p>
                      <p className="text-sm text-gray-600">{contact.associatedNumber}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No contacts</p>
              )}
            </td>
          </tr>
        ) : (
          <tr>
            <td colSpan="24" className="px-4 py-4 text-center text-sm text-gray-500">
              No unit information available
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  </div>
)}

      {/* Owner Information */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-4 mb-4">
          Owner Information
        </h2>
        <p className="text-gray-600">
          <span className="font-medium">Name:</span> {property.ownerInformation.name || "N/A"}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Email:</span> {property.ownerInformation.email || "N/A"}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Mobile:</span> {property.ownerInformation.mobileNumber || "N/A"}
        </p>
      </div>

      <button
        className="mt-8 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        onClick={() => navigate("/properties")}
      >
        Back to Listing
      </button>
    </div>
  );
};

export default PropertyPage;