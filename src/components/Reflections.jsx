import React from "react";
import styled from "styled-components";

const ReflectionsContainer = styled.div`
  max-width: 800px;
  margin: 60px auto;
  padding: 20px;
  font-family: "GazeNozarashi", serif;
  line-height: 1.8;
  background: rgba(255, 250, 240, 0.9); /* 淡雅背景色 */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #8b5e3b;
  border-bottom: 3px solid #d4a373;
  padding-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8em;
  margin-top: 30px;
  color: #5c3c26;
  border-left: 5px solid #d4a373;
  padding-left: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  text-align: justify;
  font-size: 18px;
  color: #4a3b30;
`;

const HighlightedText = styled.span`
  font-weight: bold;
  color: #d17842;
`;

const BlockQuote = styled.blockquote`
  font-size: 1.2em;
  font-style: italic;
  color: #6a4535;
  padding: 10px 20px;
  border-left: 4px solid #d17842;
  margin: 20px 0;
`;

const Reflections = () => {
  return (
    <ReflectionsContainer>
      <Title>Reflections in Bloom</Title>

      <Paragraph>
        Throughout this class, my journey with <HighlightedText>Ikebana</HighlightedText> has been more than just about arranging flowers;
        it has been an exploration of <HighlightedText>personal growth, creativity, and understanding the delicate balance</HighlightedText> between nature and art.
      </Paragraph>

      <SectionTitle>The Beauty of Asymmetry</SectionTitle>
      <Paragraph>
        The first few arrangements I created were rooted in a desire for <HighlightedText>order and symmetry</HighlightedText>.
        However, I soon realized that true beauty in Ikebana doesn't necessarily come from perfection—it comes from the interaction between elements.
      </Paragraph>

      <BlockQuote>"Asymmetry leads to a more dynamic and organic composition, allowing space for each element to breathe."</BlockQuote>

      <SectionTitle>Understanding <i>Ma</i>: The Power of Negative Space</SectionTitle>
      <Paragraph>
        One of the most profound lessons I learned was about <HighlightedText>Ma</HighlightedText>, the Japanese concept of negative space.
        Initially, I focused on filling every inch of the arrangement, but later I realized that Ma is not just the absence of material;
        it is an <HighlightedText>active, thoughtful space</HighlightedText> that holds the composition together.
      </Paragraph>

      <BlockQuote>"Ma is not emptiness, but an intentional pause—an invitation to reflect and appreciate what is present."</BlockQuote>

      <SectionTitle>Lessons from My Arrangements</SectionTitle>
      <Paragraph>
        In my arrangement <HighlightedText>"Starry Cheer"</HighlightedText>, I used bright, vibrant flowers and an asymmetrical design to express the joy of spring.
        The dominant yellow billy balls created movement and lightness, while the pink carnations added depth.
      </Paragraph>
      <Paragraph>
        On the other hand, <HighlightedText>"Autumn"</HighlightedText> was a quiet reflection of nostalgia. A dry leaf with a Gingko design enhanced its seasonal essence,
        and I learned to embrace simplicity and elegance in my work.
      </Paragraph>

      <SectionTitle>Applying Ikebana to Life</SectionTitle>
      <Paragraph>
        Beyond floral arrangements, the principles of Ikebana have influenced my daily life. <HighlightedText>Balance, patience, and mindfulness</HighlightedText>
        are now guiding principles in my work and relationships.
      </Paragraph>

      <BlockQuote>"By bringing Ikebana into my life, I cultivate mindfulness, balance, and harmony in everything I do."</BlockQuote>

      <SectionTitle>Final Thoughts</SectionTitle>
      <Paragraph>
        Ikebana has given me more than just the ability to arrange flowers. It has offered me a way to <HighlightedText>slow down, connect with nature, and find inner harmony</HighlightedText>.
        Through this class, I have learned that art is not just a process—it is a path to self-discovery, reflection, and expression.
      </Paragraph>
    </ReflectionsContainer>
  );
};

export default Reflections;

