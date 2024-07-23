// Example object `view` with a `dirty` method
let view = {
    dirty: function(item) {
        // Method implementation here
        console.log("Marking item as dirty:", item);
    }
};

// Calling the `dirty` method on `view`
let item = "exampleItem";
view.dirty(item);
