export default interface RichTextNode {
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  type?: string;
  url?: string;
  children?: RichTextNode[];
}
