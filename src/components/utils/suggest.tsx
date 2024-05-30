import suggest from "@/src/data/suggest";

export default function Suggest() {
  return (
    <div className="p-3">
      <h2 className="font-bold text-xl pb-3">Санал болгох төхөөрөмж</h2>
      <div className="flex flex-wrap -mx-2">
        {suggest.map((s, index) => (
          <div 
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4"
          >
            <div className="rounded overflow-hidden shadow-lg border border-gray-300 flex flex-col md:flex-row items-center p-3">
              <div className="w-full md:w-1/3 h-48 md:h-full flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={s.imgUrl}
                  alt="Example"
                />
              </div>
              <div className="pl-0 md:pl-3 pr-2 py-4 w-full md:w-2/3">
                <div className="font-bold text-xl mb-2">{s.title}</div>
                <p className="text-gray-700 text-base mt-2">
                  {s.desc}
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 flex items-center mt-2"
                >
                  <span>Илүүг</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
