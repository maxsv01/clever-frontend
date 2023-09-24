import React, { FC, Fragment } from "react";
import { encode } from "html-entities";
import { Text } from "slate";
import Link from "next/link";
import RichTextNode from "@/types/RichTextSerialize";

interface RichTextSerializeProps {
  nodes: RichTextNode[];
  parentKey?: string;
  parentIsParagraph?: boolean;
}

const RichTextSerialize: FC<RichTextSerializeProps> = ({
  nodes,
  parentKey = "",
  parentIsParagraph = false,
}) => {
  const nodesJsx = (nodes || []).map((node, i) => {
    const key = parentKey + "-" + i.toString();
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: encode(node.text) }} />
      );

      if (node.bold) {
        text = <strong key={key}>{text}</strong>;
      }

      if (node.code) {
        text = <code key={key}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={key}>{text}</em>;
      }
      return <Fragment key={key}>{text}</Fragment>;
    }

    if (parentIsParagraph) return null;

    if (!node) {
      return null;
    }

    if (!node.children) {
      return null;
    }

    switch (node.type) {
      case "h1":
        return (
          <h1 key={key}>
            <RichTextSerialize nodes={node.children} parentKey={key} />
          </h1>
        );
      case "h2":
        return (
          <h2 key={key}>
            <RichTextSerialize nodes={node.children} parentKey={key} />
          </h2>
        );
      case "h3":
        return (
          <h3 key={key}>
            <RichTextSerialize nodes={node.children} parentKey={key} />
          </h3>
        );
      case "h4":
        return (
          <h4 key={key}>
            <RichTextSerialize nodes={node.children} parentKey={key} />
          </h4>
        );
      case "h5":
        return (
          <h5 key={key}>
            <RichTextSerialize nodes={node.children} parentKey={key} />
          </h5>
        );
      case "h6":
        return (
          <h6 key={key}>
            <RichTextSerialize nodes={node.children} parentKey={key} />
          </h6>
        );
      case "blockquote":
        return (
          <blockquote key={key}>
            <RichTextSerialize nodes={node.children} parentKey={key} />
          </blockquote>
        );
      case "ul":
        return (
          <ul key={key}>
            <RichTextSerialize nodes={node.children} parentKey={key} />
          </ul>
        );
      case "ol":
        return (
          <ol key={key}>
            <RichTextSerialize nodes={node.children} parentKey={key} />
          </ol>
        );
      case "li":
        return (
          <li key={key}>
            <RichTextSerialize nodes={node.children} parentKey={key} />
          </li>
        );
      case "link":
        return (
          <Link href={encode(node.url)} key={key}>
            <RichTextSerialize nodes={node.children} parentKey={key} />
          </Link>
        );

      default:
        return (
          <p key={key}>
            <RichTextSerialize
              nodes={node.children}
              parentKey={key}
              parentIsParagraph={true}
            />
          </p>
        );
    }
  });

  return nodesJsx;
};

export default RichTextSerialize;
