<script lang="ts">
  import { Anchor, Background, Node, Svelvet } from 'svelvet';
  import { _ } from 'svelte-i18n';
  import {
    CSharp,
    Fedora,
    Firebase,
    Git,
    Github,
    Godot,
    Java,
    Linux,
    Python,
    React,
    SQL,
    Svelte,
    TS,
    Ubuntu,
    Unity,
    Vercel,
  } from '../../assetUrls';
</script>

<svelte:head>
  <title>Technologies - arminmiau</title>
</svelte:head>

<div class="absolute top-0 left-0 h-screen w-screen">
  <Svelvet edgeStyle="step" theme="dark" pannable locked>
    <Node
      id="pl"
      dimensions={{ width: 250, height: 50 }}
      position={{ x: 500, y: 540 }}>
      <svg class="roundRect" height="100%" width="100%">
        <rect
          width="100%"
          height="100%"
          rx="30"
          ry="30"
          fill="slateblue"
          stroke="black" />
        <text
          class="nodeText"
          text-anchor="middle"
          font-size={16}
          fill="white"
          x="50%"
          y="60%">{$_('page.technologies.pl')}</text>
      </svg>
      <div class="top-anchor">
        <Anchor direction="north" connections={['ts', 'c#']} invisible />
      </div>
      <div class="left-anchor">
        <Anchor direction="west" connections={['java', 'python']} invisible />
      </div>
      <div class="bottom-anchor">
        <Anchor direction="south" connections={['sql']} invisible />
      </div>
    </Node>
    <Node
      id="frm"
      dimensions={{ width: 150, height: 50 }}
      position={{ x: 900, y: 540 }}>
      <svg class="roundRect" height="100%" width="100%">
        <rect
          width="100%"
          height="100%"
          rx="30"
          ry="30"
          fill="slateblue"
          stroke="black" />
        <text
          class="nodeText"
          text-anchor="middle"
          font-size={16}
          fill="white"
          x="50%"
          y="60%">{$_('page.technologies.frm')}</text>
      </svg>
      <div class="left-anchor">
        <Anchor direction="west" connections={['asp']} invisible />
      </div>
      <div class="top-anchor">
        <Anchor direction="north" connections={['svelte', 'react']} invisible />
      </div>
      <div class="bottom-anchor">
        <Anchor direction="south" connections={['unity', 'godot']} invisible />
      </div>
    </Node>
    <Node
      id="inf"
      dimensions={{ width: 150, height: 50 }}
      position={{ x: 1200, y: 540 }}>
      <svg class="roundRect" height="100%" width="100%">
        <rect
          width="100%"
          height="100%"
          rx="30"
          ry="30"
          fill="slateblue"
          stroke="black" />
        <text
          class="nodeText"
          text-anchor="middle"
          font-size={16}
          fill="white"
          x="50%"
          y="60%">{$_('page.technologies.inf')}</text>
      </svg>
      <div class="top-anchor">
        <Anchor
          direction="north"
          connections={['vercel', 'firebase']}
          invisible />
      </div>
      <div class="right-anchor">
        <Anchor direction="east" connections={['git']} invisible />
      </div>
      <div class="bottom-anchor">
        <Anchor direction="south" connections={['linux']} invisible />
      </div>
    </Node>
    <Node
      id="c#"
      dimensions={{ width: 100, height: 100 }}
      position={{ x: 500, y: 100 }}>
      <img width="100" src={CSharp} alt="C#" title="C#" />
      <div class="bottom-anchor">
        <Anchor direction="south" invisible />
      </div>
    </Node>
    <Node
      id="ts"
      dimensions={{ width: 80, height: 80 }}
      position={{ x: 250, y: 200 }}>
      <img width="80" src={TS} alt="TS" title="TypeScript" />
      <div class="bottom-anchor">
        <Anchor direction="south" invisible />
      </div>
    </Node>
    <Node
      id="java"
      dimensions={{ width: 80, height: 150 }}
      position={{ x: 150, y: 400 }}>
      <img width="80" src={Java} alt="Java" title="Java" />
      <div class="right-anchor">
        <Anchor direction="east" invisible />
      </div>
    </Node>
    <Node
      id="python"
      dimensions={{ width: 80, height: 80 }}
      position={{ x: 150, y: 700 }}>
      <img width="80" src={Python} alt="Python" title="Python" />
      <div class="right-anchor">
        <Anchor direction="east" invisible />
      </div>
    </Node>
    <Node
      id="sql"
      dimensions={{ width: 80, height: 80 }}
      position={{ x: 500, y: 900 }}>
      <img width="80" src={SQL} alt="SQL" title="SQL" />
      <div class="top-anchor">
        <Anchor direction="north" invisible />
      </div>
    </Node>
    <Node
      id="asp"
      dimensions={{ width: 100, height: 50 }}
      position={{ x: 650, y: 170 }}>
      <p class="text-2xl text-center leading-5">ASP.NET Core</p>
      <div class="right-anchor">
        <Anchor direction="east" invisible />
      </div>
    </Node>
    <Node
      id="svelte"
      dimensions={{ width: 80, height: 80 }}
      position={{ x: 850, y: 200 }}>
      <img width="80" src={Svelte} alt="Svelte" title="Svelte" />
      <div class="bottom-anchor">
        <Anchor direction="south" invisible />
      </div>
    </Node>
    <Node
      id="react"
      dimensions={{ width: 80, height: 80 }}
      position={{ x: 1050, y: 200 }}>
      <img width="80" src={React} alt="React" title="React" />
      <div class="bottom-anchor">
        <Anchor direction="south" invisible />
      </div>
    </Node>
    <Node
      id="unity"
      dimensions={{ width: 80, height: 80 }}
      position={{ x: 850, y: 850 }}>
      <img width="80" src={Unity} alt="Unity" title="Unity" />
      <div class="top-anchor">
        <Anchor direction="north" invisible />
      </div>
    </Node>
    <Node
      id="godot"
      dimensions={{ width: 80, height: 80 }}
      position={{ x: 1050, y: 850 }}>
      <img width="80" src={Godot} alt="Godot" title="Godot" />
      <div class="top-anchor">
        <Anchor direction="north" invisible />
      </div>
    </Node>
    <Node
      id="vercel"
      dimensions={{ width: 250, height: 60 }}
      position={{ x: 1250, y: 150 }}>
      <img height="100" src={Vercel} alt="Vercel" title="Vercel" />
      <div class="bottom-anchor">
        <Anchor direction="south" invisible />
      </div>
    </Node>
    <Node
      id="firebase"
      dimensions={{ width: 100, height: 100 }}
      position={{ x: 1600, y: 250 }}>
      <img height="100" src={Firebase} alt="Firebase" title="Firebase" />
      <div class="left-anchor">
        <Anchor direction="west" invisible />
      </div>
    </Node>
    <Node
      id="git"
      dimensions={{ width: 100, height: 100 }}
      position={{ x: 1500, y: 515 }}>
      <img height="100" src={Git} alt="Git" title="Git" />
      <div class="left-anchor">
        <Anchor direction="west" invisible />
      </div>
      <div class="right-anchor">
        <Anchor direction="east" connections={['github']} invisible />
      </div>
    </Node>
    <Node
      id="github"
      dimensions={{ width: 100, height: 100 }}
      position={{ x: 1650, y: 515 }}>
      <img height="100" src={Github} alt="Github" title="Github" />
      <div class="left-anchor">
        <Anchor direction="west" invisible />
      </div>
    </Node>
    <Node
      id="linux"
      dimensions={{ width: 100, height: 120 }}
      position={{ x: 1300, y: 800 }}>
      <img height="100" src={Linux} alt="Linux" title="Linux" />
      <div class="top-anchor">
        <Anchor direction="north" invisible />
      </div>
      <div class="right-anchor">
        <Anchor direction="east" connections={['fedora']} invisible />
      </div>
      <div class="bottom-anchor">
        <Anchor direction="south" connections={['ubuntu']} invisible />
      </div>
    </Node>
    <Node
      id="fedora"
      dimensions={{ width: 100, height: 100 }}
      position={{ x: 1450, y: 810 }}>
      <img height="100" src={Fedora} alt="Fedora" title="Fedora" />
      <div class="left-anchor">
        <Anchor direction="west" invisible />
      </div>
    </Node>
    <Node
      id="ubuntu"
      dimensions={{ width: 100, height: 100 }}
      position={{ x: 1300, y: 950 }}>
      <img height="100" src={Ubuntu} alt="Ubuntu" title="Ubuntu" />
      <div class="top-anchor">
        <Anchor direction="north" invisible />
      </div>
    </Node>
    <Background dotSize={0} bgColor="#242424" slot="background" />
  </Svelvet>
</div>

<style>
  :global(.svelvet-node) {
    box-shadow: none !important;
  }
  .bottom-anchor {
    position: absolute;
    bottom: 0;
    left: 50%; /* Adjust the left value based on your design */
    transform: translateX(-50%);
  }
  .top-anchor {
    position: absolute;
    top: 0;
    left: 50%; /* Adjust the left value based on your design */
    transform: translateX(-50%);
  }
  .left-anchor {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateX(-50%);
  }
  .right-anchor {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateX(-50%);
  }
</style>
