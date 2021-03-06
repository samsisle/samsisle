import NextHead from 'next/head'

export default function Head({
  title = 'samsisle',
  description = 'Sam Ko. Web Engineer.',
}) {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
    </NextHead>
  )
}
