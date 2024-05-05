<script lang="ts">
  import { Progress } from '$lib/components/ui/progress';
</script>

<svelte:head>
  <title>Technologies - arminmiau</title>
</svelte:head>

<div class="flex justify-between w-[90vw] mt-[10vh] ml-[5vw]">
  <div>
    <h1 class="text-3xl">Technologies that I have used:</h1>
    <h2 class="mb-4">(bars indicate self estimate of usage)</h2>
    <ul class="list-inside mb-4 w-[25vw]">
      <li>
        <div class="flex items-center">
          <p class="w-[200px]">.NET C#</p>
          <Progress value={30} class="w-[150px]" />
          <p class="ml-[10px]">30%</p>
        </div>
      </li>
      <li>
        <div class="flex items-center">
          <p class="w-[200px]">JS/TS, Svelte</p>
          <Progress value={30} class="w-[150px]" />
          <p class="ml-[10px]">30%</p>
        </div>
      </li>
      <li>
        <div class="flex items-center">
          <p class="w-[200px]">Unity</p>
          <Progress value={20} class="w-[150px]" />
          <p class="ml-[10px]">20%</p>
        </div>
      </li>
      <li>
        <div class="flex items-center">
          <p class="w-[200px]">Java</p>
          <Progress value={15} class="w-[150px]" />
          <p class="ml-[10px]">15%</p>
        </div>
      </li>
      <li>
        <div class="flex items-center">
          <p class="w-[200px]">SQL</p>
          <Progress value={5} class="w-[150px]" />
          <p class="ml-[10px]">5%</p>
        </div>
      </li>
    </ul>
  </div>
  <div>
    <h1 class="text-3xl mb-4">Infrastracture/Services that I have used:</h1>
    <ul class="list-disc list-inside">
      <li>Firebase</li>
      <li>Vercel</li>
    </ul>
  </div>
</div>
