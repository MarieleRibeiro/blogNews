import { New, NewsList, NewsContent } from "./styles";
import image from "../../assets/Bitmap.png";

export default function News() {
  return (
    <NewsContent>
      <img src={image} alt="Highlighted" />
      <NewsList>
        <New>
          <h4>Life Advice Looking Through A Window</h4>
          <p>
            Life is a journey of twists and turns, peaks and valleys, mountains
            to climb and oceans to explore.
          </p>
        </New>
        <New>
          <h4>Life Advice Looking Through A Window</h4>
          <p>
            Life is a journey of twists and turns, peaks and valleys, mountains
            to climb and oceans to explore.
          </p>
        </New>
        <New>
          <h4>Life Advice Looking Through A Window</h4>
          <p>
            Life is a journey of twists and turns, peaks and valleys, mountains
            to climb and oceans to explore.
          </p>
        </New>
      </NewsList>
    </NewsContent>
  );
}
