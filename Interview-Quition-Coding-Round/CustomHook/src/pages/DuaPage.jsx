

const Sidebar = () => {
  return (
    <aside className="w-16 lg:w-1/6 bg-green-100 flex flex-col items-center py-4 space-y-4">
      <div className="text-green-500 font-bold text-2xl">☪️</div>
      <nav className="space-y-4">
        <button className="text-green-600 hover:text-green-800">
          <i className="fas fa-home"></i>
        </button>
        <button className="text-green-600 hover:text-green-800">
          <i className="fas fa-list-alt"></i>
        </button>
        <button className="text-green-600 hover:text-green-800">
          <i className="fas fa-cog"></i>
        </button>
      </nav>
    </aside>
  );
};

const Categories = () => {
  return (
    <div className="w-1/4">
      <h2 className="font-semibold text-green-700">Categories</h2>
      <ul className="space-y-2 mt-4">
        <li>
          <button className="w-full text-left text-sm text-green-800 hover:bg-green-50 px-2 py-1 rounded">
            Introduction to Dua
          </button>
        </li>
        <li>
          <button className="w-full text-left text-sm text-green-800 hover:bg-green-50 px-2 py-1 rounded">
            What is Dua
          </button>
        </li>
      </ul>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="flex-1 flex items-center ml-4">
      <input
        type="text"
        placeholder="Search by Dua Name"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
      />
    </div>
  );
};

const DuaList = () => {
  return (
    <div className="w-1/4 border-r p-4">
      <ul className="space-y-2">
        <li className="p-2 border-b">
          <h3 className="font-semibold">1. The servant is dependent on his Lord #1</h3>
          <p className="text-sm text-gray-600">All human beings depend on Allah...</p>
        </li>
        <li className="p-2 border-b">
          <h3 className="font-semibold">2. Conditions for Dua to be successful</h3>
          <p className="text-sm text-gray-600">Prophet (ﷺ) used to say after...</p>
        </li>
      </ul>
    </div>
  );
};

const DuaDetails = () => {
  return (
    <div className="flex-1 p-6 space-y-6">
      <section>
        <h3 className="text-green-700 font-semibold text-xl">1. The servant is dependent on his Lord</h3>
        <p className="mt-2 text-gray-700">
          All human beings depend on Allah for their welfare and prevention of evil in various matters...
        </p>
        <p className="mt-4 text-green-700 font-medium">Reference: Surah Al-Fatir 35:15</p>
      </section>
      <section>
        <h3 className="text-green-700 font-semibold text-xl">2. Conditions for Dua to be successful</h3>
        <p className="mt-2 text-gray-700">
          Prophet (ﷺ) used to say after every compulsory prayer...
        </p>
        <pre className="bg-gray-100 p-3 mt-4 rounded text-sm text-gray-800">
          Laa ilaaha illallahu wahdahu laa sharika lahu...
        </pre>
        <p className="mt-4 text-green-700 font-medium">Reference: Bukhari: 844</p>
      </section>
    </div>
  );
};

const Settings = () => {
  return (
    <aside className="w-16 lg:w-1/6 bg-gray-50 border-l p-4">
      <h3 className="text-gray-600 font-medium">Settings</h3>
      <ul className="mt-4 space-y-4">
        <li>
          <button className="w-full text-left text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-2 py-1 rounded">
            Language Settings
          </button>
        </li>
        <li>
          <button className="w-full text-left text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-2 py-1 rounded">
            General Settings
          </button>
        </li>
        <li>
          <button className="w-full text-left text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-2 py-1 rounded">
            Appearance Settings
          </button>
        </li>
      </ul>
      <div className="mt-6">
        <label className="flex items-center">
          <span className="text-sm text-gray-600">Night Mode</span>
          <input type="checkbox" className="ml-2 form-checkbox text-green-600" />
        </label>
      </div>
    </aside>
  );
};

const DuaPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 bg-white flex flex-col">
        {/* Categories and Search Bar */}
        <div className="flex border-b p-4">
          <Categories />
          <SearchBar />
        </div>

        {/* Dua Details Section */}
        <div className="flex-1 flex">
          <DuaList />
          <DuaDetails />
        </div>
      </main>
      
      {/* Settings Sidebar */}
      <Settings />
    </div>
  );
};

export default DuaPage;
