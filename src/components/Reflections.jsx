import React from "react";
import styled from "styled-components";

const ReflectionsContainer = styled.section`
  max-width: 800px; /* 适当增加宽度 */
  margin: 0 auto;
  padding: 60px 20px;
  line-height: 1.8; /* 增加行高 */
  font-family: "Merriweather", serif;
  text-align: justify;
  color: #333; /* 深灰色文字 */
  font-size: 1.1rem; /* 正文字体大小 */

  h2 {
    font-size: 2.5rem; /* 放大标题 */
    margin-bottom: 40px;
    text-align: center;
    color: #555; /* 标题颜色 */
    font-weight: bold; /* 加粗标题 */
  }

  blockquote {
    font-style: italic;
    color: #555; /* 引用文字颜色 */
    margin: 40px 0; /* 增加引用块的上下间距 */
    padding-left: 20px;
    font-size: 1.4rem; /* 放大引用内容 */
    line-height: 1.6; /* 增加引用内容的行高 */
    border-left: 4px solid #ddd; /* 简单的左边框 */
  }

  p {
    margin-bottom: 30px; /* 增加段落间距 */
  }

  strong {
    color: #555; /* 加粗文字颜色 */
  }

  hr {
    border: 0;
    height: 1px;
    background: #ddd; /* 分隔线颜色 */
    margin: 40px 0;
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 40px 15px;

    h2 {
      font-size: 2rem; /* 移动端标题缩小 */
    }

    blockquote {
      font-size: 1.2rem; /* 移动端引用内容缩小 */
    }
  }
`;

const Reflections = () => {
  return (
    <ReflectionsContainer>
      <h2 id="reflections">Reflections in Bloom</h2>

      <p>
        I remember the first time I walked into the classroom, not knowing what to expect from the world of flower arranging. When I signed up for the course, it wasn’t because I was seeking a professional challenge—I was about to graduate and had spent so much time on my major courses that I wanted something different for my final semester. I’ve always loved flowers—their colors, their scents, and the way they can brighten even the dullest corners of life.
      </p>

      <p>
        At the beginning, my attempts at flower arranging were more about mastering the techniques than truly expressing something genuine. I followed every instruction meticulously, placing each flower with the care of someone assembling a piece for a gallery. I tried to adhere strictly to the slanting technique—from high to low—just as you can see in my very first arrangement. There was a part of me that craved perfection, that felt the need to fill every empty space to create a visually complete picture. But as I continued to learn, professor introduced me to the concept of Ma. I soon discovered that emptiness isn’t a void at all, it’s a space as resonant as the elements we place within it. This idea challenged everything I had thought about beauty. It was in the quiet spaces between the flowers that I began to understand that silence, pauses, and even imperfections aren’t just acceptable—they’re essential.
      </p>

      <hr /> {/* 分隔线 */}

      <p>
        I clearly remember one class in particular. I wasn’t feeling my best that day, so I just sat quietly, my eyes fixed on a simple arrangement. In that stillness, something shifted within me—I realized that art, much like life, isn’t about placing everything in its “perfect” position. It’s about recognizing and honoring the space in between, allowing it to tell its own story. That lesson resonated with me in a way I never expected. It wasn’t merely about creating an arrangement that looked good, it was about learning to appreciate the beauty in moments that seem incomplete. Gradually, my own arrangements began to reflect that philosophy. I started intentionally leaving gaps, trusting that those spaces held their own weight and meaning.
      </p>

      <blockquote>
        "The concept of Ma has taught me to cherish the pauses in my day—to value those quiet moments of reflection just as much as the noise and bustle that typically define modern life."
      </blockquote>

      <p>
        Another concept that left a deep impression on me was Kokoro. In our classes, we were encouraged to let our emotions guide our choices—to select materials that spoke to us and to position them in a way that reflected our inner feelings. I remember one snowy afternoon when I felt especially introspective. Rather than fighting my emotions, I allowed them to flow into my work. I chose soft, subtle tones instead of bright, bold ones. That day, my arrangement wasn’t a burst of cheerful colors, it was a quiet, gentle expression of melancholy and hope. It felt raw and real, capturing a small piece of my soul within the petals and leaves.
      </p>

      <p>
        This experience taught me that art isn’t always about exuberance or joy. Sometimes, true beauty emerges from our vulnerability and honesty. I came to understand that the flower arrangements I created were not meant to impress with perfect symmetry or flawless design. Instead, they were a way to reveal a part of who I am—my messy, unpolished, yet brilliant self. In a sense, every arrangement became like a diary entry—a moment of reflection where I could look back and see how I had grown both as an artist and as a person.
      </p>

      <hr /> {/* 分隔线 */}

      <p>
        Beyond the classroom, the lessons of the flower arranging course began to seep into my everyday life. I started to see the world in a different light—more slowly, more deliberately. I now take pleasure in the gentle interplay of light and shadow on a rainy day, the subtle rustling of leaves in the breeze, and even the graceful arc of a bird in flight. These small details, which inspired the autumn theme in my sixth-arrangement, have become a constant source of wonder for me. The concept of Ma has taught me to cherish the pauses in my day—to value those quiet moments of reflection just as much as the noise and bustle that typically define modern life.
      </p>

      <p>
        For example, in the mornings, instead of diving straight into the chaos of the day, I spend a few minutes by the window watching the sunrise and feeling the cool air brush against my skin. I allow myself to simply exist in that space, free from distractions and the pressure to immediately achieve something. It is in these quiet moments that I feel most connected to what I’ve learned in the flower arranging class. Just as a carefully arranged vase uses empty space to accentuate each bloom, I’ve learned to appreciate the quiet gaps in my life where clarity and creativity can emerge.
      </p>

      <p>
        What truly warms my heart is how these practices have made me more attuned to the world around me. I now notice the delicate curve of a stray branch, the subtle gradient of color on a flower petal, or the elegant arc of a bird as it soars. Sometimes, even when I see fallen leaves on the sidewalk, I can’t help but think about how beautiful they are—reminding me that the world is still a wonderful place. In 2024, a particularly difficult year for me marked by personal lows and challenges that shook my faith in the world, these few hours each week in class helped me begin to believe that there is poetry in everyday moments—a quiet narrative woven into our lives, if only we take the time to listen.
      </p>

      <hr /> {/* 分隔线 */}

      <p>
        In a world that often celebrates loudness and extravagance, the art of flower arranging has taught me the gentle art of listening. I’ve learned that true beauty isn’t found in perfect forms, but in the honest interplay of light, space, and emotion. I’ve come to understand that my journey with flower arranging isn’t merely about learning a traditional art form. It’s an ongoing conversation with nature, with myself, and with the simple acts that shape our lives.
      </p>

      <p>
        Ultimately, the lessons from this course have far exceeded the realm of flower arranging. They have reshaped my attitude toward life, encouraging me to approach every task with greater focus, presence, and sincerity. Whether I’m crafting a simple bouquet on a quiet afternoon or facing the daily challenges of a busy life, I carry with me the spirit of Ma and Kokoro.
      </p>

      <p>
        My journey in ikebana has been one of transformation. It has taught me that every pause, every gap, every seemingly insignificant moment holds a unique kind of beauty. Perhaps the most precious lesson is learning to find and cherish the extraordinary in the ordinary. Through each arrangement, I have learned to accept my own vulnerabilities, celebrate the subtle details, and ultimately live a life as beautifully imperfect as the art I create.
      </p>
    </ReflectionsContainer>
  );
};

export default Reflections;
