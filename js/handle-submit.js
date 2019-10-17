$("#subscribe").submit(event => {
  event.preventDefault();
  $(".text-success")
    .text(
      "Subscribed successfully with email " +
        $("input")
          .first()
          .val() +
        "!"
    )
    .show();
});
