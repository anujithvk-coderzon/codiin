import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Reinforcement Learning Guide",
  description: "Learn Reinforcement Learning fundamentals - agents, environments, rewards, Q-learning, Deep Q-Networks. Build intelligent agents that learn from experience.",
  keywords: ["reinforcement learning", "RL", "Q-learning", "DQN", "policy gradient", "OpenAI Gym", "agents", "rewards"],
  alternates: { canonical: "/data-science/articles/reinforcement-learning" },
  openGraph: {
    type: "article",
    url: "/data-science/articles/reinforcement-learning",
    title: "Reinforcement Learning: Training Intelligent Agents",
    description: "Build AI agents that learn through trial and error.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/data-science", label: "Learn Data Science", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Reinforcement Learning: Training Intelligent Agents",
  "description": "Complete guide to reinforcement learning fundamentals",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-24",
  "dateModified": "2024-12-24"
} as const;

export default function DataScienceReinforcementLearningPage() {
  return (
    <>
      <JsonLd data={SCHEMA_1} />
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="article-hero">
          <div className="container">
            <div className="article-breadcrumb">
              <Link href="/">
                {"Home"}
              </Link>
              {" / "}
              <Link href="/data-science">
                {"Data Science"}
              </Link>
              {" / "}
              <span>
                {"Reinforcement Learning"}
              </span>
            </div>
            <h1>
              {"Reinforcement Learning"}
            </h1>
            <p className="article-subtitle">
              {"Training Agents Through Experience"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"20 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Reinforcement Learning?"}
                </h2>
                <p>
                  {"Reinforcement Learning (RL) is a type of machine learning where an "}
                  <strong>
                    {"agent"}
                  </strong>
                  {" learns to make decisions by interacting with an "}
                  <strong>
                    {"environment"}
                  </strong>
                  {". The agent receives "}
                  <strong>
                    {"rewards"}
                  </strong>
                  {" for good actions and penalties for bad ones, learning to maximize cumulative reward over time."}
                </p>
                <p>
                  {"Think of it like training a dog: you don't tell it exactly what to do, but reward good behavior and discourage bad behavior. The dog (agent) figures out what actions lead to treats (rewards)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"RL vs Other ML Types"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                   Machine Learning Types                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Supervised Learning:                                            │
│  ├── Learn from labeled examples                                │
│  ├── Input-output pairs provided                                │
│  └── Example: Image classification                              │
│                                                                  │
│  Unsupervised Learning:                                          │
│  ├── Find patterns in unlabeled data                            │
│  ├── No correct answers provided                                │
│  └── Example: Customer clustering                               │
│                                                                  │
│  Reinforcement Learning:                                         │
│  ├── Learn from interaction and feedback                        │
│  ├── Trial and error with rewards                               │
│  ├── Sequential decision making                                 │
│  └── Example: Game playing, robotics                            │
│                                                                  │
│  Key Difference:                                                 │
│  ├── Supervised: "Here's the answer"                            │
│  ├── Unsupervised: "Find patterns yourself"                     │
│  └── RL: "Try things, I'll tell you how well you did"           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Concepts"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Core RL Components:

# 1. Agent: The learner/decision-maker
#    - Observes state
#    - Takes actions
#    - Receives rewards

# 2. Environment: The world the agent interacts with
#    - Responds to agent's actions
#    - Provides new states and rewards

# 3. State (s): Current situation
#    - What the agent observes
#    - Example: Position on game board

# 4. Action (a): What the agent can do
#    - Choices available to agent
#    - Example: Move left, right, jump

# 5. Reward (r): Feedback signal
#    - Tells agent how good action was
#    - Example: +1 for coin, -1 for death

# 6. Policy (π): Agent's strategy
#    - Maps states to actions
#    - π(s) → a

# 7. Value Function (V): Expected future reward
#    - V(s) = Expected total reward starting from state s

# 8. Q-Function: Action-value function
#    - Q(s, a) = Expected reward for taking action a in state s

# The RL Loop:
# State → Agent → Action → Environment → Reward, New State → ...`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started with Gymnasium"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# pip install gymnasium
import gymnasium as gym
import numpy as np

# Create environment
env = gym.make('CartPole-v1', render_mode='human')

# Environment info
print(f"Action space: {env.action_space}")       # Discrete(2): left or right
print(f"Observation space: {env.observation_space}")  # 4 continuous values

# Run one episode with random actions
state, info = env.reset()
total_reward = 0
done = False

while not done:
    # Random action
    action = env.action_space.sample()

    # Take action, get feedback
    next_state, reward, terminated, truncated, info = env.step(action)
    done = terminated or truncated

    total_reward += reward
    state = next_state

print(f"Total reward: {total_reward}")
env.close()

# Popular environments:
# - CartPole: Balance a pole on a cart
# - MountainCar: Drive up a hill
# - LunarLander: Land a spacecraft
# - Atari games: Breakout, Pong, etc.`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Q-Learning"}
                </h2>
                <p>
                  {"Q-Learning is a foundational RL algorithm that learns the value of actions in states without needing a model of the environment."}
                </p>
                <div className="code-block">
                  <pre><code>{`import numpy as np
import gymnasium as gym

# Q-Learning for discrete environments
env = gym.make('FrozenLake-v1', is_slippery=False)

# Initialize Q-table
n_states = env.observation_space.n
n_actions = env.action_space.n
Q = np.zeros((n_states, n_actions))

# Hyperparameters
learning_rate = 0.8    # How much to update Q values
discount = 0.95        # Importance of future rewards
epsilon = 1.0          # Exploration rate
epsilon_decay = 0.995
min_epsilon = 0.01
episodes = 10000

# Training loop
for episode in range(episodes):
    state, _ = env.reset()
    done = False

    while not done:
        # Epsilon-greedy action selection
        if np.random.random() < epsilon:
            action = env.action_space.sample()  # Explore
        else:
            action = np.argmax(Q[state])        # Exploit

        # Take action
        next_state, reward, terminated, truncated, _ = env.step(action)
        done = terminated or truncated

        # Q-Learning update (Bellman equation)
        # Q(s,a) = Q(s,a) + α * [r + γ * max(Q(s')) - Q(s,a)]
        best_next = np.max(Q[next_state])
        Q[state, action] += learning_rate * (
            reward + discount * best_next - Q[state, action]
        )

        state = next_state

    # Decay exploration
    epsilon = max(min_epsilon, epsilon * epsilon_decay)

print("Learned Q-table:")
print(Q)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Deep Q-Network (DQN)"}
                </h2>
                <p>
                  {"For complex environments with large state spaces, use neural networks to approximate the Q-function."}
                </p>
                <div className="code-block">
                  <pre><code>{`import tensorflow as tf
from tensorflow import keras
import numpy as np
from collections import deque
import random

class DQNAgent:
    def __init__(self, state_size, action_size):
        self.state_size = state_size
        self.action_size = action_size

        # Replay memory
        self.memory = deque(maxlen=10000)

        # Hyperparameters
        self.gamma = 0.95      # Discount factor
        self.epsilon = 1.0     # Exploration rate
        self.epsilon_min = 0.01
        self.epsilon_decay = 0.995
        self.learning_rate = 0.001
        self.batch_size = 32

        # Neural networks
        self.model = self._build_model()
        self.target_model = self._build_model()
        self.update_target_model()

    def _build_model(self):
        model = keras.Sequential([
            keras.layers.Dense(64, activation='relu', input_shape=(self.state_size,)),
            keras.layers.Dense(64, activation='relu'),
            keras.layers.Dense(self.action_size, activation='linear')
        ])
        model.compile(optimizer=keras.optimizers.Adam(self.learning_rate),
                      loss='mse')
        return model

    def update_target_model(self):
        self.target_model.set_weights(self.model.get_weights())

    def remember(self, state, action, reward, next_state, done):
        self.memory.append((state, action, reward, next_state, done))

    def act(self, state):
        if np.random.random() < self.epsilon:
            return random.randrange(self.action_size)
        q_values = self.model.predict(state[np.newaxis], verbose=0)
        return np.argmax(q_values[0])

    def replay(self):
        if len(self.memory) < self.batch_size:
            return

        batch = random.sample(self.memory, self.batch_size)

        states = np.array([x[0] for x in batch])
        actions = np.array([x[1] for x in batch])
        rewards = np.array([x[2] for x in batch])
        next_states = np.array([x[3] for x in batch])
        dones = np.array([x[4] for x in batch])

        # Current Q values
        targets = self.model.predict(states, verbose=0)

        # Next Q values from target network
        next_q = self.target_model.predict(next_states, verbose=0)

        for i in range(self.batch_size):
            if dones[i]:
                targets[i][actions[i]] = rewards[i]
            else:
                targets[i][actions[i]] = rewards[i] + self.gamma * np.max(next_q[i])

        self.model.fit(states, targets, epochs=1, verbose=0)

        # Decay epsilon
        if self.epsilon > self.epsilon_min:
            self.epsilon *= self.epsilon_decay`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Training DQN"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import gymnasium as gym

# Create environment
env = gym.make('CartPole-v1')
state_size = env.observation_space.shape[0]
action_size = env.action_space.n

# Create agent
agent = DQNAgent(state_size, action_size)

# Training loop
episodes = 500
target_update = 10  # Update target network every N episodes

for episode in range(episodes):
    state, _ = env.reset()
    total_reward = 0
    done = False

    while not done:
        action = agent.act(state)
        next_state, reward, terminated, truncated, _ = env.step(action)
        done = terminated or truncated

        # Store experience
        agent.remember(state, action, reward, next_state, done)

        # Learn from experience
        agent.replay()

        state = next_state
        total_reward += reward

    # Update target network periodically
    if episode % target_update == 0:
        agent.update_target_model()

    print(f"Episode {episode}, Reward: {total_reward}, Epsilon: {agent.epsilon:.2f}")

env.close()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Policy Gradient Methods"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Policy Gradient: Learn policy directly (not Q-values)
# REINFORCE algorithm

import tensorflow as tf
import numpy as np

class PolicyGradientAgent:
    def __init__(self, state_size, action_size):
        self.state_size = state_size
        self.action_size = action_size
        self.learning_rate = 0.01
        self.gamma = 0.99

        self.model = self._build_model()
        self.optimizer = tf.keras.optimizers.Adam(self.learning_rate)

        # Episode memory
        self.states = []
        self.actions = []
        self.rewards = []

    def _build_model(self):
        model = keras.Sequential([
            keras.layers.Dense(64, activation='relu', input_shape=(self.state_size,)),
            keras.layers.Dense(64, activation='relu'),
            keras.layers.Dense(self.action_size, activation='softmax')  # Probability distribution
        ])
        return model

    def act(self, state):
        probs = self.model.predict(state[np.newaxis], verbose=0)[0]
        return np.random.choice(self.action_size, p=probs)

    def remember(self, state, action, reward):
        self.states.append(state)
        self.actions.append(action)
        self.rewards.append(reward)

    def compute_returns(self):
        returns = []
        cumulative = 0
        for reward in reversed(self.rewards):
            cumulative = reward + self.gamma * cumulative
            returns.insert(0, cumulative)

        # Normalize returns
        returns = np.array(returns)
        returns = (returns - returns.mean()) / (returns.std() + 1e-8)
        return returns

    def train(self):
        returns = self.compute_returns()

        with tf.GradientTape() as tape:
            states = np.array(self.states)
            probs = self.model(states)

            # Log probability of taken actions
            indices = tf.stack([tf.range(len(self.actions)), self.actions], axis=1)
            log_probs = tf.math.log(tf.gather_nd(probs, indices) + 1e-8)

            # Policy gradient loss
            loss = -tf.reduce_mean(log_probs * returns)

        gradients = tape.gradient(loss, self.model.trainable_variables)
        self.optimizer.apply_gradients(zip(gradients, self.model.trainable_variables))

        # Clear memory
        self.states = []
        self.actions = []
        self.rewards = []`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Real-World Applications"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Game Playing:"}
                    </strong>
                    {" AlphaGo, OpenAI Five (Dota 2), game AI"}
                  </li>
                  <li>
                    <strong>
                      {"Robotics:"}
                    </strong>
                    {" Robot manipulation, walking, autonomous navigation"}
                  </li>
                  <li>
                    <strong>
                      {"Recommendation Systems:"}
                    </strong>
                    {" Personalized content, ad placement"}
                  </li>
                  <li>
                    <strong>
                      {"Finance:"}
                    </strong>
                    {" Trading strategies, portfolio management"}
                  </li>
                  <li>
                    <strong>
                      {"Healthcare:"}
                    </strong>
                    {" Treatment optimization, drug dosing"}
                  </li>
                  <li>
                    <strong>
                      {"Autonomous Vehicles:"}
                    </strong>
                    {" Decision making in traffic"}
                  </li>
                  <li>
                    <strong>
                      {"Resource Management:"}
                    </strong>
                    {" Data center cooling (Google), energy grids"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Algorithms Summary"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Value-Based Methods:
# - Q-Learning: Tabular, simple environments
# - DQN: Neural network Q-function, complex states
# - Double DQN: Reduces overestimation
# - Dueling DQN: Separates value and advantage

# Policy-Based Methods:
# - REINFORCE: Basic policy gradient
# - Actor-Critic: Combines value and policy
# - A2C/A3C: Advantage Actor-Critic (parallel)
# - PPO: Proximal Policy Optimization (stable, popular)
# - SAC: Soft Actor-Critic (state-of-the-art)

# Model-Based Methods:
# - Learn environment dynamics
# - Plan using learned model
# - More sample efficient

# Recommended starting point:
# 1. Q-Learning for simple environments
# 2. DQN for image-based games
# 3. PPO for continuous control (most versatile)`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Reinforcement Learning"}
                </h2>
                <p>
                  {"Our Data Science program covers RL fundamentals and advanced techniques."}
                </p>
                <Link href="/data-science" className="btn btn-primary">
                  {"Explore Data Science Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/data-science/articles/deep-learning" className="related-article-card">
                    <h4>
                      {"Deep Learning"}
                    </h4>
                    {" "}
                    <p>
                      {"Neural network fundamentals"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/pytorch" className="related-article-card">
                    <h4>
                      {"PyTorch"}
                    </h4>
                    {" "}
                    <p>
                      {"Deep learning framework"}
                    </p>
                  </Link>
                  <Link href="/data-science/articles/machine-learning" className="related-article-card">
                    <h4>
                      {"Machine Learning Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"ML basics and concepts"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Reinforcement Learning."} />
    </>
  );
}
