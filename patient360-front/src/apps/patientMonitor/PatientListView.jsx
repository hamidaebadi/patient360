import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const demoPatients = [
  {
id: 1,
full_name: "Emily Johnson",
gender: "Female",
age: 34,
risk_score: 0.82,
status: "Critical",
assigned_doctor_name: "Dr. Harris",
},
{
id: 2,
full_name: "Michael Smith",
gender: "Male",
age: 47,
risk_score: 0.56,
status: "Stable",
assigned_doctor_name: "Dr. Thompson",
},
{
id: 3,
full_name: "Olivia Lee",
gender: "Female",
age: 29,
risk_score: 0.73,
status: "Critical",
assigned_doctor_name: "Dr. Khan",
},
{
id: 4,
full_name: "Ethan Williams",
gender: "Male",
age: 62,
risk_score: 0.41,
status: "Stable",
assigned_doctor_name: "Dr. Reyes",
},
{
id: 5,
full_name: "Sophia Martinez",
gender: "Female",
age: 51,
risk_score: 0.90,
status: "Critical",
assigned_doctor_name: "Dr. Ahmed",
},
{
id: 6,
full_name: "William Davis",
gender: "Male",
age: 38,
risk_score: 0.35,
status: "Stable",
assigned_doctor_name: "Dr. Green",
},
{
id: 7,
full_name: "Isabella Wilson",
gender: "Female",
age: 44,
risk_score: 0.78,
status: "Critical",
assigned_doctor_name: "Dr. Brown",
},
{
id: 8,
full_name: "James Anderson",
gender: "Male",
age: 53,
risk_score: 0.60,
status: "Stable",
assigned_doctor_name: "Dr. Zhang",
},
{
id: 9,
full_name: "Ava Thomas",
gender: "Female",
age: 27,
risk_score: 0.50,
status: "Stable",
assigned_doctor_name: "Dr. Kapoor",
},
{
id: 10,
full_name: "Logan White",
gender: "Male",
age: 66,
risk_score: 0.88,
status: "Critical",
assigned_doctor_name: "Dr. Silva",
},
{
id: 11,
full_name: "Charlotte Murphy",
gender: "Female",
age: 36,
risk_score: 0.63,
status: "Stable",
assigned_doctor_name: "Dr. Novak",
},
{
id: 12,
full_name: "Benjamin Turner",
gender: "Male",
age: 49,
risk_score: 0.77,
status: "Critical",
assigned_doctor_name: "Dr. Singh",
},
{
id: 13,
full_name: "Mia Rivera",
gender: "Female",
age: 31,
risk_score: 0.58,
status: "Stable",
assigned_doctor_name: "Dr. Wang",
},
{
id: 14,
full_name: "Daniel Scott",
gender: "Male",
age: 58,
risk_score: 0.85,
status: "Critical",
assigned_doctor_name: "Dr. Kim",
},
{
id: 15,
full_name: "Amelia Adams",
gender: "Female",
age: 45,
risk_score: 0.39,
status: "Stable",
assigned_doctor_name: "Dr. Patel",
},
{
id: 16,
full_name: "Liam Nelson",
gender: "Male",
age: 52,
risk_score: 0.66,
status: "Critical",
assigned_doctor_name: "Dr. Lopez",
},
{
id: 17,
full_name: "Harper Brooks",
gender: "Female",
age: 33,
risk_score: 0.44,
status: "Stable",
assigned_doctor_name: "Dr. Foster",
},
{
id: 18,
full_name: "Henry Ramirez",
gender: "Male",
age: 60,
risk_score: 0.93,
status: "Critical",
assigned_doctor_name: "Dr. Russo",
},
{
id: 19,
full_name: "Ella Cooper",
gender: "Female",
age: 26,
risk_score: 0.31,
status: "Stable",
assigned_doctor_name: "Dr. Blake",
},
{
id: 20,
full_name: "Alexander Parker",
gender: "Male",
age: 48,
risk_score: 0.71,
status: "Critical",
assigned_doctor_name: "Dr. Bennett",
},
]

const PatientListView = () => {
  const [patients, setPatients] = useState(demoPatients);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [sortField, setSortField] = useState('full_name');
  const [sortAsc, setSortAsc] = useState(false);

  const handleSort = (field) => {
    if (sortField === field) setSortAsc(!sortAsc);
    else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Patients</h2>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 text-gray-400 w-4 h-4" />
          <input
            type="text"
            className="pl-8 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-xl">

        <table className="min-w-full divide-y divide-gray-200">

          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-lg font-medium text-gray-700 cursor-pointer" onClick={() => handleSort('full_name')}>
                Name {sortField === 'full_name' && (sortAsc ? <ChevronUp size={16} className="inline" /> : <ChevronDown size={16} className="inline" />)}
              </th>
              <th className="px-4 py-3 text-left text-lg font-medium text-gray-700">Gender</th>
              <th className="px-4 py-3 text-left text-lg font-medium text-gray-700">Age</th>
              
              <th className="px-4 py-3 text-left text-lg font-medium text-gray-700">Risk</th>
              <th className="px-4 py-3 text-left text-lg font-medium text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-lg font-medium text-gray-700">Doctor</th>
              <th className="px-4 py-3 text-lg text-gray-700">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100  transition">
            {patients.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-lg text-gray-800">{p.full_name}</td>
                <td className="px-6 py-4  text-lg text-gray-600">{p.gender}</td>
                <td className="px-6 py-4  text-lg text-gray-600">{p.age}</td>
                <td className="px-6 py-4  text-lg">
                  <span className={`px-2 py-1 rounded-xl text-xs font-medium ${p.risk_score > 0.7 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>{p.risk_score.toFixed(2)}</span>
                </td>
                <td className="px-4 py-2 text-lg">
                  <span className={`px-2 py-1 rounded-xl text-xs font-medium ${p.status === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>{p.status}</span>
                </td>
                <td className="px-6 py-4  text-lg text-gray-600">{p.assigned_doctor_name}</td>
                <td className="px-6 py-4  text-lg">
                  <NavLink to='patient_detail/' className ="text-sm bg-gray-800 text-white px-5 py-2 rounded-2xl" > View</NavLink>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-600">Page {page} of {totalPages}</p>
        <div className="space-x-2">
          <button
            className="px-3 py-1 rounded border text-sm disabled:opacity-40"
            disabled={page <= 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Prev
          </button>
          <button
            className="px-3 py-1 rounded border text-sm disabled:opacity-40"
            disabled={page >= totalPages}
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientListView