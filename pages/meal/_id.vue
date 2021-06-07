<template>
  <div>
    <h1>
      <NuxtLink :to="`/`">{{ title }}</NuxtLink>
    </h1>
    <Block
      v-for="block in blocks"
      :key="block.id"
      :type="block.type"
      :text="block.text"
    />
  </div>
</template>

<script>
import Block from '~/components/Block'

export default {
  components: {
    Block,
  },
  async asyncData({ env, params, $axios }) {
    const MY_NOTION_TOKEN = env.notionSecret

    try {
      const blocksResponse = await $axios.$get(
        `https://api.notion.com/v1/blocks/${params.id}/children`,
        {
          headers: {
            Authorization: `Bearer ${MY_NOTION_TOKEN}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2021-05-13',
          },
        }
      )

      // blocksResponse.results.forEach((entry) => {
      //   console.log(entry)
      // })

      const blocks = blocksResponse.results
        .filter((meal) => meal?.type !== 'unsupported')
        .map((meal) => ({
          id: meal.id,
          type: meal.type,
          text: meal[meal.type]?.text?.[0]?.plain_text ?? '',
        }))

      return {
        blocks,
      }
    } catch (e) {
      console.log({ e })

      return { blocks: {} }
    }
  },
  computed: {
    title() {
      const id = this.$route.params.id
      return this.$store.state.meals.titles[id]
    },
  },
}
</script>

<style></style>
