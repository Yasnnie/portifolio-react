export default function Analytics() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VKSV6D8H7C"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VKSV6D8H7C',
  {
    page_path:window.location.pathname
});
`,
        }}
      ></script>
    </>
  )
}
