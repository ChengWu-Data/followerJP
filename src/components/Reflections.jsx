import styled from "styled-components";
import { StyledSectionHeading } from "/src/styles/UI/StyledSectionHeading";

const ReflectionsContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 20px;
  font-family: "Merriweather", serif;
  line-height: 1.8;
  color: #4a3b2d;
  background: #fdf6e3;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: "Playfair Display", serif;
  text-align: center;
  color: #5b3a1a;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 40px;
  border-left: 5px solid #b87d4b;
  padding-left: 10px;
  color: #5b3a1a;
`;

const HighlightedText = styled.span`
  color: #c67b4b;
  font-weight: bold;
`;

const Quote = styled.blockquote`
  font-style: italic;
  margin: 20px 0;
  padding: 10px;
  border-left: 3px solid #b87d4b;
  color: #6a4e3a;
`;

const Reflections = () => {
  return (
    <ReflectionsContainer>
      <StyledSectionHeading>
        <Title>Reflections in Bloom</Title>
      </StyledSectionHeading>

      <p>
        Throughout this class, my journey with <HighlightedText>Ikebana</HighlightedText> has been more than just about arranging flowers; 
        it has been an exploration of personal growth, creativity, and understanding the delicate balance between nature and art. 
        As I moved through each lesson, I began to realize that Ikebana is not only a skill but a practice that goes beyond aesthetics—it is 
        about connecting with the materials, expressing emotions, and embracing a mindful approach to creation. 
      </p>

      <Subtitle>The Beauty of Asymmetry</Subtitle>
      <p>
        The first few arrangements I created were rooted in a desire for <HighlightedText>order and symmetry</HighlightedText>. 
        However, I soon realized that true beauty in Ikebana doesn't necessarily come from perfection—it comes from the interaction between elements.
      </p>
      <Quote>
        "Asymmetry leads to a more dynamic and organic composition, allowing space for each element to breathe."
      </Quote>

      <Subtitle>Understanding Ma: The Power of Negative Space</Subtitle>
      <p>
        One of the most profound lessons I learned was about <HighlightedText>Ma</HighlightedText>, the Japanese concept of negative space. 
        Initially, I focused on filling every inch of the vase, thinking that the more flowers and elements I added, the better the arrangement would be. 
        However, I discovered that Ma is not just the absence of material; it is an active, thoughtful space that holds the composition together.
      </p>

      <Subtitle>Embracing Emotion in Arrangements</Subtitle>
      <p>
        In my first arrangement, titled <HighlightedText>“Starry Cheer”</HighlightedText>, I used bright, vibrant flowers and an asymmetrical design 
        to express the joy and liveliness of spring. The dominant element was the yellow billy balls, creating a sense of movement and lightness. 
        As I progressed, I experimented with more subtle, serene arrangements that focused on quiet reflection. One of my favorites, <HighlightedText>“Autumn”</HighlightedText>, 
        used warm colors and delicate textures to express calmness and nostalgia.
      </p>

      <Subtitle>The Spirit of Ikebana</Subtitle>
      <p>
        In addition to the technical aspects, I learned about <HighlightedText>kokoro</HighlightedText>—the concept of heart or spirit. 
        Ikebana became a way to create with intention, allowing my emotions to guide the process. Whether it was the brightness of <HighlightedText>"Joy"</HighlightedText> 
        or the quiet stillness of <HighlightedText>"Echoes of Stillness"</HighlightedText>, each arrangement mirrored my internal world.
      </p>

      <Subtitle>Applying Lessons Beyond Ikebana</Subtitle>
      <p>
        The principles of balance, <HighlightedText>Ma</HighlightedText>, and kokoro have reshaped how I approach my work and life. 
        In my academic work, I’ve started to embrace the idea of allowing space for reflection rather than constantly pushing forward. 
        In relationships, I’ve learned the importance of understanding the space between people, allowing for connection and distance in harmony.
      </p>

      <Subtitle>Final Thoughts</Subtitle>
      <p>
        Ikebana has given me more than just the ability to arrange flowers—it has taught me patience, mindfulness, and an appreciation for simplicity. 
        Through this class, I have learned that art is not just a process—it is a path to self-discovery and expression.
      </p>
    </ReflectionsContainer>
  );
};

export default Reflections;

