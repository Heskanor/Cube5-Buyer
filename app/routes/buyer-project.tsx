import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
// Image asset constants
const img2 = "http://localhost:3845/assets/4547dc93c17dd5b6d7db7750d0f44d7e0f7ff3da.png";
const img = "http://localhost:3845/assets/7201ce85715e378300168a934c81c55e6c4e3b0d.svg";
const img1 = "http://localhost:3845/assets/6e810d647de3e396622041184de02aaa6e0fd17a.svg";
const img3 = "http://localhost:3845/assets/dbea4c1d63b06e6f89c50bf02e08e271f7a03412.svg";
const imgFrame = "http://localhost:3845/assets/69dfdf6d95f4cfa5a28c72250b5b4ea4696100d1.svg";
const img4 = "http://localhost:3845/assets/38cfb8775aa17fc836a088654ec89aa0e22e46c2.svg";
const img5 = "http://localhost:3845/assets/47e6b3b8dbce2f3b6303e7304d3f83c12f27e863.svg";
const img6 = "http://localhost:3845/assets/e08ae16a224e4eeb4b722599ce8649b5a58a7fce.svg";
const img7 = "http://localhost:3845/assets/9cf488198bf9233b6b944678d17222a5c34d3af2.svg";
const img8 = "http://localhost:3845/assets/9a9daaff33ef613ed42b9e9cc4de4439be75c956.svg";
const img9 = "http://localhost:3845/assets/0c662b89064cb1267673868a0b82146c6a128062.svg";
const img10 = "http://localhost:3845/assets/77590320d84161a85fd714233fe76e5bf34fecbf.svg";

type SubCriteria = {
  id: string;
  text: string;
  weight: string;
  scores: string[];
};

type TableRow = {
  id: string;
  title: string;
  weight: string;
  scores: string[];
  sub?: SubCriteria[];
};

const tableData: TableRow[] = [
  {
    id: "innovation",
    title: "Innovation and Technological Advancement (6)",
    weight: "21%",
    scores: ["34.6%", "52.6%", "55%", "55%", "55%"],
    sub: [
      {
        id: "5.6.1",
        text: "5.6.1 Provider's technology capabilities and digital supply chain solutions will be evaluated.",
        weight: "Mandatory",
        scores: ["1%", "55%", "49%", "19%", "19%"]
      },
      {
        id: "5.6.2",
        text: "5.6.2 Provider's R&D investment and innovation track record.",
        weight: "Optional",
        scores: ["10%", "20%", "15%", "10%", "5%"]
      }
    ]
  },
  {
    id: "cost",
    title: "Cost Competitiveness (4)",
    weight: "18%",
    scores: ["40%", "60%", "50%", "45%", "55%"],
    sub: [
      {
        id: "5.7.1",
        text: "5.7.1 Total cost of ownership including implementation and support.",
        weight: "Mandatory",
        scores: ["20%", "30%", "25%", "20%", "30%"]
      },
      {
        id: "5.7.2",
        text: "5.7.2 Flexibility in pricing and payment terms.",
        weight: "Optional",
        scores: ["20%", "30%", "25%", "25%", "25%"]
      }
    ]
  },
  {
    id: "scalability",
    title: "Scalability and Integration (5)",
    weight: "20%",
    scores: ["50%", "45%", "60%", "55%", "50%"],
    sub: [
      {
        id: "5.8.1",
        text: "5.8.1 Ability to scale with business growth.",
        weight: "Mandatory",
        scores: ["25%", "20%", "30%", "25%", "20%"]
      },
      {
        id: "5.8.2",
        text: "5.8.2 Integration with existing systems.",
        weight: "Mandatory",
        scores: ["25%", "25%", "30%", "30%", "30%"]
      }
    ]
  },
  {
    id: "support",
    title: "Support and Training (3)",
    weight: "15%",
    scores: ["60%", "55%", "65%", "60%", "58%"],
    sub: [
      {
        id: "5.9.1",
        text: "5.9.1 Quality of post-implementation support.",
        weight: "Mandatory",
        scores: ["30%", "25%", "35%", "30%", "28%"]
      },
      {
        id: "5.9.2",
        text: "5.9.2 Availability of training resources.",
        weight: "Optional",
        scores: ["30%", "30%", "30%", "30%", "30%"]
      }
    ]
  },
  {
    id: "references",
    title: "References and Track Record (2)",
    weight: "10%",
    scores: ["70%", "65%", "75%", "70%", "68%"],
    sub: [
      {
        id: "5.10.1",
        text: "5.10.1 Number of successful ERP implementations.",
        weight: "Mandatory",
        scores: ["35%", "30%", "40%", "35%", "34%"]
      },
      {
        id: "5.10.2",
        text: "5.10.2 Client references and testimonials.",
        weight: "Optional",
        scores: ["35%", "35%", "35%", "35%", "34%"]
      }
    ]
  }
];

const getSubRows = (row: TableRow): TableRow[] =>
  row.sub?.map(sub => ({
    id: sub.id,
    title: sub.text,
    weight: sub.weight,
    scores: sub.scores,
  })) || [];

const columnHelper = createColumnHelper<TableRow>();

const columns = [
  columnHelper.accessor("title", {
    header: () => "Evaluation Criteria",
    cell: ({ row, getValue }) => {
      return <span className="font-semibold">{getValue()}</span>;
    },
  }),
  columnHelper.accessor("weight", {
    header: () => (
      <span className="flex items-center">Weight / Importance <img src={img8} alt="Sort" className="ml-2 w-4 h-4" /></span>
    ),
  }),
  columnHelper.accessor((row) => row.scores[0], {
    id: "LangeTech",
    header: () => "LangeTech",
  }),
  columnHelper.accessor((row) => row.scores[1], {
    id: "Best Pacific",
    header: () => "Best Pacific",
  }),
  columnHelper.accessor((row) => row.scores[2], {
    id: "KMNM",
    header: () => "KMNM",
  }),
  columnHelper.accessor((row) => row.scores[3], {
    id: "Bhilosa",
    header: () => "Bhilosa",
  }),
  columnHelper.accessor((row) => row.scores[4], {
    id: "Tianhai Lace",
    header: () => "Tianhai Lace",
  }),
];

export default function BuyerProject() {
  const [expanded, setExpanded] = React.useState<{}>({});
  const table = useReactTable<TableRow>({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    state: { expanded },
    onExpandedChange: setExpanded,
    getSubRows,
  });

  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Project"
      id="node-1_150"
    >
      {/* Header */}
      <div className="backdrop-blur-[2.85px] backdrop-filter bg-[#ffffff] shrink-0 sticky top-0 w-full px-8 py-3" data-name="Header" id="node-1_151">
        <div className="absolute border-[0px_0px_1px] border-slate-300 border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-between relative size-full">
          {/* Left: Logo */}
          <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0" data-name="Logo" id="node-1_152">
              <div className="h-7 relative shrink-0 w-[25.55px]" data-name="Logo" id="node-I1_152-2006_8045">
                <div className="absolute h-7 left-0 top-0 w-[25.55px]" id="node-I1_152-2006_8046">
                  <img alt="Cube5 Logo" className="block max-w-none size-full" src={img} />
                </div>
              </div>
              <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[18px] text-left text-nowrap text-zinc-950" id="node-I1_152-2006_8055">
                <p className="block leading-[28px] whitespace-pre">Cube5</p>
              </div>
              <div className="box-border content-stretch flex flex-col gap-2.5 h-5 items-center justify-center p-0 relative rounded-[11763.5px] shrink-0 w-8" data-name="Badge" id="node-I1_152-2006_8070">
                <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-[11763.5px]" />
                <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0" data-name="Text" id="node-I1_152-2006_8070-424_373">
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[8px] text-left text-nowrap text-zinc-950" id="node-I1_152-2006_8070-424_374">
                    <p className="block leading-[16px] whitespace-pre">Buyer</p>
                  </div>
                </div>
              </div>
            </div>
          {/* Right: Search and Avatar */}
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-0 relative shrink-0" id="node-1_153">
              <div className="bg-[#ffffff] box-border content-stretch flex flex-row h-8 items-center justify-between px-3 py-1 relative rounded-md shrink-0 w-[300px]" data-name="Filter" id="node-1_154">
                <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0" data-name="Text" id="node-1_155">
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic opacity-50 relative shrink-0 text-[16px] text-left text-nowrap text-zinc-500" id="node-1_156">
                    <p className="block leading-[24px] whitespace-pre">Search anything..</p>
                  </div>
                </div>
                <div className="bg-neutral-50 box-border content-stretch flex flex-row gap-1 h-5 items-center justify-center px-1.5 py-0 relative rounded shrink-0 w-[31.25px]" data-name="Wrapper" id="node-1_157">
                  <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded" />
                  <div className="overflow-clip relative shrink-0 size-[13px]" data-name="command" id="node-1_158">
                    <div className="absolute inset-[12.5%]" data-name="Vector" id="node-I1_158-128_815">
                      <div className="absolute inset-[-5.128%]">
                        <img alt="Command Icon" className="block max-w-none size-full" src={img1} />
                      </div>
                    </div>
                  </div>
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap text-zinc-500" id="node-1_159">
                    <p className="block leading-[16px] whitespace-pre">K</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[8234.47px] shrink-0 size-7" data-name="Circle" id="node-1_160">
                <div className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-[8234.47px]" style={{ backgroundImage: `url('${img2}')` }} />
              </div>
            </div>
        </div>
      </div>
      
      {/* Main Content and Table */}
      <div className="bg-[#ffffff] relative rounded-lg shrink-0 w-full" data-name="Wrapper" id="node-1_161">
        <div className="flex flex-col items-center relative size-full">
          <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start p-[32px] relative w-full">
            {/* Title and Actions */}
            <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full" data-name="Wrapper" id="node-1_162">
              <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-center p-0 relative shrink-0" id="node-1_163">
                <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0" data-name="Title" id="node-1_164">
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[24px] text-left text-nowrap" id="node-1_165">
                    <p className="block leading-[32px] whitespace-pre">ERP System Implimentation</p>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0" data-name="Text" id="node-1_166">
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap" id="node-1_167">
                    <p className="block leading-[24px] whitespace-pre">Looking for a comprehensive ERP solution for our manufacturing operations</p>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col gap-4 items-end justify-start p-0 relative shrink-0" id="node-1_168">
                <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1.5 h-8 items-center justify-start px-2.5 py-0 relative rounded-md shrink-0" data-name="Filter" id="node-1_169">
                  <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                  <div className="overflow-clip relative shrink-0 size-4" data-name="upload" id="node-1_170">
                    <div className="absolute inset-[12.5%]" data-name="Vector" id="node-I1_170-128_2807">
                      <div className="absolute inset-[-4.167%]">
                        <img alt="Upload Icon" className="block max-w-none size-full" src={img3} />
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0" data-name="Text" id="node-1_171">
                    <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap text-zinc-950" id="node-1_172">
                      <p className="block leading-[16px] whitespace-pre">Update RFP</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1.5 h-8 items-center justify-start px-2.5 py-0 relative rounded-md shrink-0" data-name="Filter" id="node-1_173">
                  <div className="absolute border border-solid border-teal-600 inset-0 pointer-events-none rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                  <div className="relative shrink-0 size-4" data-name="Frame" id="node-1_174">
                    <img alt="Frame Icon" className="block max-w-none size-full" src={imgFrame} />
                  </div>
                  <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0" data-name="Text" id="node-1_176">
                    <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap text-zinc-950" id="node-1_177">
                      <p className="block leading-[16px] whitespace-pre">Ask anything</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Table and Filters */}
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full" data-name="Wrapper" id="node-1_178">
              {/* Filter Row */}
              <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full" id="node-1_179">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0" data-name="Wrapper" id="node-1_180">
                  {/* Filter Input */}
                  <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 h-8 items-center justify-start px-3 py-1 relative rounded-md shrink-0 w-[300px]" data-name="Filter" id="node-1_181">
                    <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0" data-name="Text" id="node-1_182">
                      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic opacity-50 relative shrink-0 text-[16px] text-left text-nowrap text-zinc-500" id="node-1_183">
                        <p className="block leading-[24px] whitespace-pre">Filter tasks...</p>
                      </div>
                    </div>
                  </div>
                  {/* Status Dropdown */}
                  <div className="flex flex-row items-center self-stretch">
                    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1.5 h-full items-center justify-start px-2.5 py-0 relative rounded-md shrink-0" data-name="Filter" id="node-1_184">
                      <div className="absolute border border-dashed border-zinc-200 inset-0 pointer-events-none rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0" data-name="Text" id="node-1_185">
                        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap text-zinc-950" id="node-1_186">
                          <p className="block leading-[16px] whitespace-pre">Status</p>
                        </div>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-4" data-name="chevron-down" id="node-1_187">
                        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector" id="node-I1_187-128_583">
                          <div className="absolute bottom-[-16.667%] left-[-8.333%] right-[-8.333%] top-[-16.667%]">
                            <img alt="Chevron Down" className="block max-w-none size-full" src={img4} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Priority Dropdown */}
                  <div className="flex flex-row items-center self-stretch">
                    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1.5 h-full items-center justify-start px-2.5 py-0 relative rounded-md shrink-0" data-name="Filter" id="node-1_188">
                      <div className="absolute border border-dashed border-zinc-200 inset-0 pointer-events-none rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0" data-name="Text" id="node-1_189">
                        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap text-zinc-950" id="node-1_190">
                          <p className="block leading-[16px] whitespace-pre">Priority</p>
                        </div>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-4" data-name="chevron-down" id="node-1_191">
                        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector" id="node-I1_191-128_583">
                          <div className="absolute bottom-[-16.667%] left-[-8.333%] right-[-8.333%] top-[-16.667%]">
                            <img alt="Chevron Down" className="block max-w-none size-full" src={img4} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add Filter Button */}
                  <div className="flex flex-row items-center self-stretch">
                    <div className="bg-zinc-500 box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-center px-3 py-0 relative rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[98px]" data-name="Filter" id="node-1_192">
                      <div className="overflow-clip relative shrink-0 size-4" data-name="circle-plus" id="node-1_193">
                        <div className="absolute inset-[8.333%]" data-name="Vector" id="node-I1_193-128_683">
                          <div className="absolute inset-[-3.75%]">
                            <img alt="Circle Plus" className="block max-w-none size-full" src={img5} />
                          </div>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0" data-name="Text" id="node-1_194">
                        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-50 text-nowrap" id="node-1_195">
                          <p className="block leading-[16px] whitespace-pre">Add Filter</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* View and Add Bids Buttons */}
                <div className="flex flex-row items-center self-stretch">
                  <div className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0" id="node-1_196">
                    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1.5 h-8 items-center justify-start px-2.5 py-0 relative rounded-md shrink-0 w-[77px]" data-name="Filter" id="node-1_197">
                      <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                      <div className="overflow-clip relative shrink-0 size-4" data-name="settings-2" id="node-1_198">
                        <div className="absolute inset-[16.667%]" data-name="Vector" id="node-I1_198-128_2305">
                          <div className="absolute inset-[-4.688%]">
                            <img alt="Settings" className="block max-w-none size-full" src={img6} />
                          </div>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0" data-name="Text" id="node-1_199">
                        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap text-zinc-950" id="node-1_200">
                          <p className="block leading-[16px] whitespace-pre">View</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-950 box-border content-stretch flex flex-row gap-1.5 h-full items-center justify-center px-3 py-0 relative rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Filter" id="node-1_201">
                      <div className="overflow-clip relative shrink-0 size-4" data-name="upload" id="node-1_202">
                        <div className="absolute inset-[12.5%]" data-name="Vector" id="node-I1_202-128_2807">
                          <div className="absolute inset-[-4.167%]">
                            <img alt="Upload" className="block max-w-none size-full" src={img7} />
                          </div>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0" data-name="Text" id="node-1_203">
                        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-50 text-nowrap" id="node-1_204">
                          <p className="block leading-[16px] whitespace-pre">Add Bids</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Table Structure (headers and sample row) */}
              <div className="bg-[#ffffff] relative rounded-md shrink-0 w-full" data-name="Table" id="node-1_205">
                <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
                  <table className="min-w-full border-collapse">
                    <thead className="bg-zinc-100 font-semibold text-zinc-950 border-b border-zinc-200">
                      {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                          {headerGroup.headers.map(header => (
                            <th key={header.id} className="px-2 py-2 text-left">
                              {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody>
                      {table.getRowModel().rows.map(row => (
                        <React.Fragment key={row.id}>
                          <tr className="bg-zinc-100 border-b border-zinc-200 cursor-pointer" onClick={() => row.toggleExpanded()}>
                            {row.getVisibleCells().map(cell => (
                              <td key={cell.id} className="px-2 py-2">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </td>
                            ))}
                          </tr>
                          {row.getIsExpanded() && row.subRows.length > 0 && row.subRows.map(subRow => (
                            <tr key={subRow.id} className="bg-white border-b border-zinc-100">
                              {subRow.getVisibleCells().map(cell => (
                                <td key={cell.id} className="px-2 py-2 text-sm text-zinc-700">
                                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 