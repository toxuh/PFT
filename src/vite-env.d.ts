// <reference types="vite/client" />

declare module '*.sass' {
  export default Record<[className: string], string>
}
