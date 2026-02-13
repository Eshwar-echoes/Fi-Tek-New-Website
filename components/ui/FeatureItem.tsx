interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 text-(--brand-primary)">
        {icon}
      </div>

      <div>
        <h3 className="text-base font-semibold text-(--text-primary)">
          {title}
        </h3>
        <p className="mt-1 text-sm text-(--text-secondary)">
          {description}
        </p>
      </div>
    </div>
  );
}
