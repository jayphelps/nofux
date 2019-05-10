export default typeof globalThis === "object" ? globalThis
             : typeof global     === "object" ? global
             : typeof window     === "object" ? window
             : typeof self       === "object" ? self
             :                                  {};
