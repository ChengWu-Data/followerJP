import React from "react";
import styled from "styled-components";


const ReflectionsContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px;
  line-height: 1.8;
  font-family: "Merriweather", serif;
  text-align: justify;
  color: ${({ theme }) => theme.text};

  blockquote {
    font-style: italic;
    color: ${({ theme }) => theme.primary};
    border-left: 4px solid ${({ theme }) => theme.primary};
    padding-left: 20px;
    margin: 20px 0;
  }

  p {
    margin-bottom: 20px;
  }

  strong {
    color: ${({ theme }) => theme.primary};
  }
`;

const Reflections = () => {
  return (
    <ReflectionsContainer>
      
        <h2 id="projects">My Ikebana Creations</h2>
     

      <p>
        Throughout this class, my journey with Ikebana has been more than just
        about arranging flowers; it has been an exploration of <strong>personal growth</strong>,{" "}
        <strong>creativity</strong>, and understanding the delicate balance between{" "}
        <strong>nature and art</strong>. As I moved through each lesson, I began to realize that
        Ikebana is not only a skill but a practice that goes beyond aesthetics—it is about{" "}
        <strong>connecting with the materials</strong>, expressing emotions, and embracing a mindful
        approach to creation. Each arrangement, from my first to the last, has been a unique
        reflection of where I was emotionally and what I was learning about myself and the world
        around me.
      </p>

      <p>
        The first few arrangements I created were rooted in a desire for{" "}
        <strong>order and symmetry</strong>. I was drawn to the idea of balance, but I soon realized
        that true beauty in Ikebana doesn't necessarily come from perfection—it comes from the{" "}
        <strong>interaction between elements</strong>. In the early stages of my work, I struggled with
        the concept of asymmetry, which was something I had not explored much in my past artistic
        experiences. However, as I worked through the different assignments, I started to appreciate
        how asymmetry could lead to a more dynamic and organic composition, allowing space for each
        element to breathe.
      </p>

      <p>
        The most significant lesson I learned in this class was about <strong>Ma</strong>, the
        Japanese concept of <strong>negative space</strong>. Initially, I was concerned with filling
        every inch of the vase, thinking that the more flowers and elements I added, the better the
        arrangement would be. However, as I studied Ikebana more deeply, I understood that{" "}
        <strong>Ma</strong> is not just the absence of material; it is an active, thoughtful space
        that holds the composition together. The space around the flowers allows for flow and
        movement, creating a sense of balance and harmony that might otherwise be lost in a crowded
        arrangement.
      </p>

      <p>
        In one of my arrangement, titled <strong>“Starry Cheer”</strong>, I used bright, vibrant
        flowers and an asymmetrical design to express the <strong>joy and liveliness of spring</strong>.
        The dominant element in this arrangement was the yellow billy balls, which pointed upward,
        creating a sense of movement and lightness. The experience of arranging flowers has taught 
        me patience, attentiveness, and a deep appreciation for the beauty found in simplicity.
      </p>

      <p>
        As I progressed, I began to experiment with more subtle, serene arrangements that focused on{" "}
        <strong>quiet reflection</strong>. One of my favorites was <strong>“Autumn”</strong>, which
        used warm colors and delicate textures to express <strong>calmness and nostalgia</strong>. This
        piece incorporated negative space as the empty areas around the branches and flowers were
        just as important as the material itself.
      </p>

      <p>
        Each of my seven arrangements allowed me to explore different aspects of Ikebana and Japanese
        aesthetics. The principles of <strong>line, mass, dot, and surface</strong> became key to my
        understanding of composition. I learned that the placement of every material was a decision
        that impacted the overall feeling of the piece. Through this process, I grew more confident in
        my ability to create something unique and meaningful.
      </p>

      <p>
        Reflecting on how these lessons can be applied to my own life, I recognize the influence that
        Ikebana has had beyond the art form itself. The concept of <strong>balance</strong>, the
        importance of <strong>negative space</strong>, and the understanding of <strong>kokoro</strong>{" "}
        have reshaped how I approach both my work and my personal life.
      </p>

      <p>
        By bringing the principles of Ikebana into my daily life, I hope to continue cultivating mindfulness, 
        balance, and beauty in everything I do.
      </p>

      <p>
        Ikebana has given me more than just the ability to arrange flowers. It has offered me a way to{" "}
        <strong>slow down, connect with nature, and find harmony within myself</strong>. Through this
        class, I have learned that art is not just a process—it is a path to self-discovery, reflection,
        and expression.
      </p>
    </ReflectionsContainer>
  );
};

export default Reflections;
