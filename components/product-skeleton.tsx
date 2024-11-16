export default function ProductSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="aspect-square bg-muted rounded-lg" />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="aspect-square bg-muted rounded-md" />
        ))}
      </div>
    </div>
  );
}