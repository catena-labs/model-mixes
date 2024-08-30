// Allow importing .md files as strings
declare module "*.md" {
  const content: string
  export default content
}
