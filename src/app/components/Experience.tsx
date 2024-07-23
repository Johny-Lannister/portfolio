const Experience = () => {
    return (
        <div className="-my-6">
            {/* Item #1 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Retail Employee</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 -translate-y-2 inline-flex items-center justify-content text-xs font-semibold uppercase w-[100px] h-[40px] text-center mb-3 sm:mb-2 text-emerald-600 bg-emerald-100 rounded-full">MAR, 2024 - Present</time>
                    <div className="text-xl font-bold text-slate-900">Hardware Store, Sanitary.</div>
                </div>
                <div className="text-slate-500">Customer service, inventory control and loading, order assembly.</div>
            </div>

            {/* Item #2 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Store Manager</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 -translate-y-2 inline-flex items-center justify-center text-xs font-semibold uppercase w-[100px] h-[40px] text-center mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">APR, 2023 - MAR, 2024</time>
                    
                    <div className="text-xl font-bold text-slate-900">Hardware Store</div>
                </div>
                <div className="text-slate-500">Customer service. Troubleshooting daily issues. Organization of spaces. Inventory control. Order generation. Invoicing. Price updates.</div>
            </div>

            {/* Item #3 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Warehouse Supervisor</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 -translate-y-2 inline-flex items-center justify-center text-xs font-semibold uppercase w-[100px] h-[40px] text-center mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">APR, 2023 - MAR, 2024</time>
                    <div className="text-xl font-bold text-slate-900">Hardware Supplies Distributor</div>
                </div>
                <div className="text-slate-600">Supervision of the storage and distribution of products within the warehouse. Supervision of staff and compliance control in procedures for proper functioning and organization. Coordination for the reception and delivery of merchandise. Inventory control and loading. Invoicing. Price updates.</div>
            </div>          
        </div>
    );
};

export default Experience;
