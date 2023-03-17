import React from "react";
import { ContentData } from "./interfaces";

type ContentProps = {
  contents?: ContentData["data"];
};

const Content = ({ contents }: ContentProps) => {
  return (
    <div>
      {contents && (
        <>
          <div>{contents.perex && <p>{contents.perex}</p>}</div>
          {contents.content && (
            <p>
              <div dangerouslySetInnerHTML={{ __html: contents.content }}></div>
            </p>
          )}
          {contents.contact && (
            <div>
              <p>Email: {contents.contact.phone}</p>
              <p>Phone: {contents.contact.email}</p>
            </div>
          )}
          {contents.image && <img src={contents.image} alt="Article" />}
          {contents.sidebar && (
            <ul>
              {contents.sidebar.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          )}
          {contents.heroCta && (
            <div>
              <a href={contents.heroCta.url}>{contents.heroCta.name}</a>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Content;
