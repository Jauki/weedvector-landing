import React from "react";

const devices = [
  { name: "DHT11_low-6d85b...", model: "DHT11_low", uuid: "6d85b55-922a...", status: "Active", caps: ["TEMPERATURE", "HUMIDITY"] },
  { name: "DHT11_high-b79dd...", model: "DHT11_high", uuid: "b79dd72e-6885...", status: "Active", caps: ["TEMPERATURE", "HUMIDITY"] },
  { name: "DS18B20-17cf8b5...", model: "DS18B20", uuid: "17cf8b58-3b0f...", status: "Active", caps: ["TEMPERATURE"] },
  { name: "DebugCamera-14780...", model: "DebugCamera", uuid: "147809ef-e1ac...", status: "Active", caps: ["CAMERA_IMAGE"] },
];

export function DevicesMockup() {
  return (
    <div
      className="rounded-2xl overflow-hidden w-full"
      style={{
        background: "#0D0F0B",
        border: "1px solid #1E2620",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Browser Chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "#0A0C09", borderBottom: "1px solid #1A1E18" }}
      >
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-3 h-3 rounded-full" style={{ background: "#2A2D28" }} />
          ))}
        </div>
        <div
          className="flex-1 rounded-md px-3 py-1 text-center mx-6"
          style={{ background: "#141712", fontSize: 11, color: "#4A583D", fontFamily: "'Geist Mono', monospace" }}
        >
          app.weedvector.io/environments/test-1/devices
        </div>
      </div>

      {/* Content */}
      <div className="flex">
        {/* Sidebar */}
        <div
          className="flex-shrink-0 p-3"
          style={{ width: 150, background: "#0A0C09", borderRight: "1px solid #1A1E18" }}
        >
          <div className="flex items-center gap-2 mb-4 px-2 pt-1">
            <div className="w-5 h-5 rounded" style={{ background: "#1E2620" }}>
              <svg viewBox="0 0 20 20" fill="none" className="w-full h-full p-1">
                <path d="M14 9L9 14" stroke="#73885F" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 3L3 13" stroke="#73885F" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span style={{ fontSize: 11, color: "#6A7E5A", fontFamily: "'Geist Mono', monospace", fontWeight: 600 }}>
              weedvector
            </span>
          </div>
          {[
            { label: "Dashboard", active: false },
            { label: "Timelapse", active: false },
            { label: "Devices", active: true },
            { label: "Settings", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg mb-0.5"
              style={{
                background: item.active ? "#1A1E18" : "transparent",
                fontSize: 11,
                color: item.active ? "#A4B494" : "#4A583D",
              }}
            >
              <div className="w-3 h-3 rounded-sm" style={{ background: item.active ? "#2E3A2A" : "#141712" }} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 p-5">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "#1A1E18" }}
            >
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                <rect x="3" y="7" width="14" height="10" rx="1.5" stroke="#73885F" strokeWidth="1.5" />
                <path d="M7 7V5a3 3 0 016 0v2" stroke="#73885F" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#E8EDE4" }}>Devices</div>
              <div style={{ fontSize: 11, color: "#4A583D" }}>Manage sensors and devices assigned to this environment.</div>
            </div>
          </div>

          <div className="mb-2">
            <span style={{ fontSize: 12, color: "#8A9E7A", fontFamily: "Inter, sans-serif" }}>
              Active Devices <span style={{ color: "#4A583D" }}>(4)</span>
            </span>
          </div>

          {/* Table */}
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #1E2620" }}>
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#111410" }}>
                  {["Name", "Model", "UUID", "Status", "Capabilities", "Last Heartbeat"].map((h) => (
                    <th
                      key={h}
                      className="px-3 py-2 text-left"
                      style={{ fontSize: 10, color: "#4A583D", fontFamily: "Inter, sans-serif", fontWeight: 500, borderBottom: "1px solid #1E2620" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {devices.map((device, i) => (
                  <tr
                    key={device.name}
                    style={{ borderBottom: i < devices.length - 1 ? "1px solid #1A1E18" : "none" }}
                  >
                    <td className="px-3 py-2.5">
                      <span style={{ fontSize: 11, color: "#8A9E7A", fontFamily: "'Geist Mono', monospace" }}>{device.name}</span>
                    </td>
                    <td className="px-3 py-2.5">
                      <span style={{ fontSize: 11, color: "#6A7E5A", fontFamily: "'Geist Mono', monospace" }}>{device.model}</span>
                    </td>
                    <td className="px-3 py-2.5">
                      <span style={{ fontSize: 10, color: "#4A583D", fontFamily: "'Geist Mono', monospace" }}>{device.uuid}</span>
                    </td>
                    <td className="px-3 py-2.5">
                      <span
                        className="flex items-center gap-1 px-2 py-0.5 rounded-full w-fit"
                        style={{ fontSize: 10, color: "#73885F", background: "#141E14", border: "1px solid #1E3A1E" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#4A8A4A" }} />
                        Active
                      </span>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="flex gap-1">
                        {device.caps.map((cap) => (
                          <span
                            key={cap}
                            className="px-1.5 py-0.5 rounded"
                            style={{ fontSize: 9, color: "#4A583D", background: "#1A1E18", fontFamily: "'Geist Mono', monospace" }}
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-3 py-2.5">
                      <span style={{ fontSize: 10, color: "#73885F", fontFamily: "Inter, sans-serif" }}>Just now</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
