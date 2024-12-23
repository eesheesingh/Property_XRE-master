// import { ArrowUpIcon } from "@heroicons/react/20/solid";
// import { useState, useEffect } from "react";
// import React from "react";
// export default function PropertyListing({ projects, setSort_by }) {
//   const [id, setId] = useState(true);
//   const [type, setType] = useState(false);
//   const [title, setTitle] = useState(false);
//   useEffect(() => {
//     setSort_by(id ? "id" : "-id");
//   }, [id]);
//   useEffect(() => {
//     setSort_by(type ? "type" : "-type");
//   }, [type]);
//   useEffect(() => {
//     setSort_by(title ? "title" : "-title");
//   }, [title]);
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 lg:mb-6">
//       <div className="mt-2 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 h-[350px] [&::-webkit-scrollbar]:hidden">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 px-2">
//             <div className="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
//               <table className="min-w-full z-1 divide-y divide-gray-300">
//                 <thead className="bg-gray-50 sticky top-0 z-1">
//                   <tr className="hidden tablet:table-row">
//                     <th
//                       scope="col"
//                       className="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-500 sm:pl-6"
//                     >
//                       <div
//                         onClick={() => {
//                           setId(!id);
//                           setTitle(false);
//                           setType(false);
//                         }}
//                         className="flex gap-2 items-center"
//                       >
//                         <p>ID’s</p>
//                         <ArrowUpIcon
//                           className={`w-5 h-5 ${
//                             id ? "rotate-0" : "rotate-180"
//                           }`}
//                         />
//                       </div>
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-sm font-medium text-gray-500 flex justify-center"
//                     >
//                       <div
//                         onClick={() => {
//                           setType(!type);
//                           setId(false);
//                           setTitle(false);
//                         }}
//                         className="flex gap-2 items-center"
//                       >
//                         <p>TYPE</p>
//                         <ArrowUpIcon
//                           className={`w-5 h-5 ${
//                             type ? "rotate-0" : "rotate-180"
//                           }`}
//                         />
//                       </div>
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
//                     >
//                       <div
//                         onClick={() => {
//                           setTitle(!title);
//                           setId(false);
//                           setType(false);
//                         }}
//                         className="flex gap-2"
//                       >
//                         <p>PROPERTY NAME</p>
//                         <ArrowUpIcon
//                           className={`w-5 h-5 ${
//                             title ? "rotate-0" : "rotate-180"
//                           }`}
//                         />
//                       </div>
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
//                     >
//                       LOCATION
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
//                     >
//                       AVAILABLE AREA
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
//                     >
//                       OCCUPIED
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-sm font-medium text-gray-500 text-center"
//                     >
//                       STATUS
//                     </th>
//                     <th
//                       scope="col"
//                       className="relative py-3.5 pl-3 pr-4 sm:pr-6"
//                     >
//                       <span className="sr-only">Edit</span>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {projects.length ? (
//                     projects.map((property) => (
//                       <React.Fragment key={property.id}>
//                         <tr className="block tablet:table-row">
//                           <td className="hidden tablet:table-cell whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
//                             {property.id}
//                           </td>
//                           <td className="hidden tablet:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
//                             <button
//                               type="button"
//                               className="inline-flex items-center gap-x-1.5 rounded-3xl bg-red-100 px-3 py-1 text-sm font-semibold text-red-800"
//                             >
//                               {property.type}
//                             </button>
//                           </td>
//                           <td className="hidden tablet:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                             {property.title}
//                           </td>
//                           <td className="hidden tablet:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                             {property.location}
//                           </td>
//                           <td className="hidden tablet:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                             {property.toatal_area}
//                           </td>
//                           <td className="hidden tablet:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                             {property.occupied_area}
//                           </td>
//                           <td className="hidden tablet:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
//                             <button
//                               type="button"
//                               className={`inline-flex items-center gap-x-1.5 rounded-3xl px-3 py-1 text-sm font-semibold ${
//                                 property.status === "Approved"
//                                   ? "bg-green-100 text-green-800"
//                                   : property.status === "Drafts"
//                                   ? "bg-yellow-100 text-yellow-800"
//                                   : property.status === "Rejected"
//                                   ? "bg-red-100 text-red-800"
//                                   : " bg-yellow-100"
//                               }`}
//                             >
//                               {property.status}
//                             </button>
//                           </td>
//                         </tr>
//                         <tr className="tablet:hidden">
//                           <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
//                             ID’s
//                           </td>
//                           <td className="py-2 px-3 text-sm text-gray-500">
//                             {property.id}
//                           </td>
//                         </tr>
//                         <tr className="tablet:hidden">
//                           <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
//                             TYPE
//                           </td>
//                           <td className="py-2 px-3 text-sm text-gray-500">
//                             <button
//                               type="button"
//                               className="inline-flex items-center gap-x-1.5 rounded-3xl bg-red-100 px-3 py-1 text-sm font-semibold text-red-800"
//                             >
//                               {property.type}
//                             </button>
//                           </td>
//                         </tr>
//                         <tr className="tablet:hidden">
//                           <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
//                             PROPERTY NAME
//                           </td>
//                           <td className="py-2 px-3 text-sm text-gray-500">
//                             {property.title}
//                           </td>
//                         </tr>
//                         <tr className="tablet:hidden">
//                           <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
//                             LOCATION
//                           </td>
//                           <td className="py-2 px-3 text-sm text-gray-500">
//                             {property.location}
//                           </td>
//                         </tr>
//                         <tr className="tablet:hidden">
//                           <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
//                             AVAILABLE AREA
//                           </td>
//                           <td className="py-2 px-3 text-sm text-gray-500">
//                             {property.toatal_area}
//                           </td>
//                         </tr>
//                         <tr className="tablet:hidden">
//                           <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
//                             OCCUPIED
//                           </td>
//                           <td className="py-2 px-3 text-sm text-gray-500">
//                             {property.occupied_area}
//                           </td>
//                         </tr>
//                         <tr className="tablet:hidden">
//                           <td className="py-2 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6 bg-gray-50">
//                             STATUS
//                           </td>
//                           <td className="py-2 px-3 text-sm text-gray-500">
//                             <button
//                               type="button"
//                               className={`inline-flex items-center gap-x-1.5 rounded-3xl px-3 py-1 text-sm font-semibold ${
//                                 property.status === "Approved"
//                                   ? "bg-green-100 text-green-800"
//                                   : property.status === "Drafts"
//                                   ? "bg-yellow-100 text-yellow-800"
//                                   : property.status === "Rejected"
//                                   ? "bg-red-100 text-red-800"
//                                   : " bg-yellow-100"
//                               }`}
//                             >
//                               {property.status}
//                             </button>
//                           </td>
//                         </tr>
//                       </React.Fragment>
//                     ))
//                   ) : (
//                     <div className="py-3 flex justify-center">
//                       <h1 className="text-3xl font-bold">No Match Found</h1>
//                     </div>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMatchStore } from "../../store/projectStore";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function PropertyListing() {
  const properties = useMatchStore((state) => state.properties); // Subscribes to properties
  const [sortBy, setSort_by] = useState("id");
  const [id, setId] = useState(true);
  const [type, setType] = useState(false);
  const [title, setTitle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setSort_by(id ? "id" : "-id");
  }, [id]);

  useEffect(() => {
    setSort_by(type ? "type" : "-type");
  }, [type]);

  useEffect(() => {
    setSort_by(title ? "title" : "-title");
  }, [title]);

  const handleAddFloor = (propertyId, floorId) => {
    navigate(`/properties/${propertyId}/floors/${floorId || "new"}`);
  };

  const handleAddUnit = (propertyId, floorId, unitId) => {
    navigate(
      `/properties/${propertyId}/floors/${floorId}/units/${unitId || "new"}`
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 lg:mb-6">
      <div className="mt-2 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 h-[350px] [&::-webkit-scrollbar]:hidden">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 px-2">
            <div className="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full z-1 divide-y divide-gray-300">
                <thead className="bg-gray-50 sticky top-0 z-1">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-500 sm:pl-6"
                    >
                      <div
                        onClick={() => {
                          setId(!id);
                          setTitle(false);
                          setType(false);
                        }}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <p>ID</p>
                        <ArrowUpIcon
                          className={`w-5 h-5 ${
                            id ? "rotate-0" : "rotate-180"
                          }`}
                        />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm font-medium text-gray-500 flex justify-center"
                    >
                      <div
                        onClick={() => {
                          setType(!type);
                          setId(false);
                          setTitle(false);
                        }}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <p>Type</p>
                        <ArrowUpIcon
                          className={`w-5 h-5 ${
                            type ? "rotate-0" : "rotate-180"
                          }`}
                        />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
                    >
                      Property Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
                    >
                      Available Area
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-gray-500"
                    >
                      Occupied
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm font-medium text-gray-500 text-center"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm font-medium text-gray-500 text-center"
                    >
                      Floors
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm font-medium text-gray-500 text-center"
                    >
                      Units
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {properties.length ? (
                    properties.map((property) => (
                      <tr key={property.id} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {property.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-1.5 rounded-3xl bg-red-100 px-3 py-1 text-sm font-semibold text-red-800"
                          >
                            {property.type}
                          </button>
                        </td>
                        <td
                          className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 cursor-pointer hover:underline"
                          onClick={() => navigate(`/properties/${property.id}`)}
                        >
                          {property.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {property.location}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {property.total_area}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {property.occupied_area}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                          <button
                            type="button"
                            className={`inline-flex items-center gap-x-1.5 rounded-3xl px-3 py-1 text-sm font-semibold ${
                              property.status === "Approved"
                                ? "bg-green-100 text-green-800"
                                : property.status === "Drafts"
                                ? "bg-yellow-100 text-yellow-800"
                                : property.status === "Rejected"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {property.status}
                          </button>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-center">
                          {property.floorInformation.floorNumber ? (
                            property.floorInformation.floorNumber
                          ) : (
                            <button
                              type="button"
                              className="rounded-md bg-green-500 px-4 py-1 text-sm text-white hover:bg-green-600"
                              onClick={() =>
                                handleAddFloor(
                                  property.id,
                                  property.floorInformation.id
                                )
                              }
                            >
                              Add Floor
                            </button>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-center">
                          {property.unitInformation.unitNumber ? (
                            property.unitInformation.unitNumber
                          ) : (
                            <button
                              type="button"
                              className="rounded-md bg-blue-500 px-4 py-1 text-sm text-white hover:bg-blue-600"
                              onClick={() =>
                                handleAddUnit(
                                  property.id,
                                  property.floorInformation.id,
                                  property.unitInformation.id
                                )
                              }
                            >
                              Add Unit
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="9"
                        className="py-3 text-center text-gray-500 text-xl"
                      >
                        No properties found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
