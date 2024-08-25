// FilterComponent.js
import React from 'react';

const FilterComponent = ({ filters, handleFilterChange, handleResetFilters }) => {
    const L1Categories = [
        'Seals',
        'Tata Ace Application',
        'Other Tata Applications',
        'KITS',
        'SPACERS',
        'Ashok Leyland Applications',
        'Other Applications',
        'SONALIKA TRACTORS Applications',
        'Electric Motor Applications',
        'Other Leyland Application',
        'Eicher Application',
        'Other NISSAN Applications',
        'Other BEDFORD Applications',
        'Other PERKINS Applications',
    ];

    const L2Categories = [
        'Oil Seal',
        'Valve Stem Seal',
        'Kits',
        'Spacer',
        'SYNCHROMESH KIT',
        'Valve Stem Lock',
        'Locks',
        'Steel Ring'
    ];

    const L3Categories = [
        'Shaft Seal',
        'Camshaft Seal',
        'Crankshaft Bearing Seal',
        'Timing Seal',
        'FKM Seal',
        'Nitile Seal',
        'Pinion Seal',
        'Hub Seal',
        'Gear Box Seal',
        'Engine Seal',
        'Stearing Seal',
        'Spacer Seal',
        'Spring Lock',
        'VALVE SPRING LOCKS',
        'Bearing Seal',
        'Axle Seal',
        'Break Cam Seal',
        'Valve Assy',
        'Plain Steel Seal',
        'Canter Seal',
        'Jumbo Seal',
        'Fork Seal',
        'Rubber Seal',
        'FTL Valve Seal',
        'FKM Valve Seal',
        'Injector Seal',
        'HINO Valve Seal',
        'BS-II Valve Seal',
        'BS-III Valve Seal',
        'Silicon Seal',
        'Valve Stem Assy',
        'DI Valve Seal',
        'Peugeot Valve Stem',
        'Sealing Ring',
        'Nitrile Valve Stem',
        'Fork Seal',
        'Gasket',
        'Tachometer Oil Seal',
        'Lubricant Seal',
        'Main Big Seal',
        'OM Seam',
        'PIN Seal'
    ];

    return (
        <div className="flex flex-col md:flex-row md:space-x-6 mb-10">
            <select
                name="l1"
                value={filters.l1}
                onChange={handleFilterChange}
                className="border rounded-lg px-4 py-2 mb-4 md:mb-0 md:w-1/3 bg-gray-100 text-gray-800 shadow-sm transition-transform duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Select L1 Category</option>
                {L1Categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            <select
                name="l2"
                value={filters.l2}
                onChange={handleFilterChange}
                className="border rounded-lg px-4 py-2 mb-4 md:mb-0 md:w-1/3 bg-gray-100 text-gray-800 shadow-sm transition-transform duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Select L2 Category</option>
                {L2Categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            <select
                name="l3"
                value={filters.l3}
                onChange={handleFilterChange}
                className="border rounded-lg px-4 py-2 mb-4 md:mb-0 md:w-1/3 bg-gray-100 text-gray-800 shadow-sm transition-transform duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Select L3 Category</option>
                {L3Categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            <button 
                onClick={handleResetFilters} 
                className="bg-red-500 text-white rounded-lg px-4 py-2 mt-4 md:mt-0 md:ml-4 md:w-auto transition-transform duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
                Reset
            </button>
        </div>
    );
};

export default FilterComponent;
